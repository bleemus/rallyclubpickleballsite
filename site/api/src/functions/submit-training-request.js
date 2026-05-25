const { app } = require('@azure/functions');
const { getTableClient, TABLES } = require('../lib/table-client');
const { verifyTurnstile, getRequestHost, isPreviewHost } = require('../lib/turnstile');
const { validateSubmission } = require('../lib/validate');
const { checkRateLimit, recordAttempt } = require('../lib/rate-limit');
const { isDuplicate, monthKey } = require('../lib/dedupe');
const { computeDedupeHash, hashIp, newRowKey } = require('../lib/crypto');
const { getAllowedIds, getInstructorName } = require('../lib/instructors');

const SILENT_OK = { status: 200, jsonBody: { ok: true } };

app.http('submit-training-request', {
  methods: ['POST'],
  route: 'training-requests',
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    let body;
    try {
      body = await req.json();
    } catch {
      return { status: 400, jsonBody: { error: 'invalid_json' } };
    }

    if (body && body.website) return SILENT_OK;
    if (!body || typeof body.elapsedMs !== 'number' || body.elapsedMs < 3000) return SILENT_OK;

    const forwarded = req.headers.get('x-forwarded-for') || '';
    const ip = forwarded.split(',')[0].trim() || 'unknown';
    const userAgent = (req.headers.get('user-agent') || '').slice(0, 200);
    const host = getRequestHost(req);

    const turnstileOk = await verifyTurnstile(body.turnstileToken, ip, host, (msg, data) => ctx.log(msg, data));
    if (!turnstileOk) {
      ctx.log('Turnstile verification failed', {
        host,
        preview: isPreviewHost(host),
        hadToken: !!body.turnstileToken
      });
      return { status: 400, jsonBody: { error: 'verification_failed' } };
    }

    const allowedIds = getAllowedIds();
    const { ok, errors, clean } = validateSubmission(body, allowedIds);
    if (!ok) {
      return { status: 400, jsonBody: { error: 'validation_failed', fields: errors } };
    }

    const ipHash = hashIp(ip);
    if (await checkRateLimit(ipHash)) {
      ctx.log('Rate limited');
      return { status: 429, jsonBody: { error: 'rate_limited' } };
    }

    const dedupeHash = computeDedupeHash(clean.email, clean.phone);
    if (await isDuplicate(dedupeHash)) {
      ctx.log('Duplicate submission suppressed');
      await recordAttempt(ipHash);
      return SILENT_OK;
    }

    const now = new Date();
    const entity = {
      partitionKey: monthKey(now),
      rowKey: newRowKey(),
      Name: clean.name,
      Email: clean.email,
      Phone: clean.phone,
      InstructorId: clean.instructorId,
      InstructorName: getInstructorName(clean.instructorId),
      DuprOrSkill: clean.duprOrSkill,
      Goals: clean.goals,
      PreferredTimes: clean.preferredTimes,
      Notes: clean.notes,
      Status: 'New',
      SubmittedAt: now,
      IpHash: ipHash,
      UserAgent: userAgent,
      DedupeHash: dedupeHash,
      AdminNotes: ''
    };

    try {
      await getTableClient(TABLES.TrainingRequests).createEntity(entity);
      await recordAttempt(ipHash);
    } catch (err) {
      ctx.log('Failed to write training request', err);
      return { status: 500, jsonBody: { error: 'storage_failure' } };
    }

    return SILENT_OK;
  }
});
