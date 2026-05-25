const { app } = require('@azure/functions');
const { getTableClient, TABLES } = require('../lib/table-client');
const { validateStatus, STATUSES } = require('../lib/validate');

const MAX_PAGE_SIZE = 200;

app.http('list-training-requests', {
  methods: ['GET'],
  route: 'manage/requests',
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    const url = new URL(req.url);
    const status = url.searchParams.get('status');
    const limitRaw = parseInt(url.searchParams.get('limit') || '100', 10);
    const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(limitRaw, 1), MAX_PAGE_SIZE) : 100;

    const filters = [];
    if (status && status !== 'All') {
      if (!validateStatus(status)) {
        return { status: 400, jsonBody: { error: 'invalid_status', allowed: [...STATUSES] } };
      }
      filters.push(`Status eq '${status}'`);
    }

    const queryOptions = filters.length > 0 ? { filter: filters.join(' and ') } : undefined;

    const client = getTableClient(TABLES.TrainingRequests);
    const items = [];
    try {
      const iterator = client.listEntities({ queryOptions });
      for await (const entity of iterator) {
        items.push(serialize(entity));
        if (items.length >= limit) break;
      }
    } catch (err) {
      ctx.log('Failed to list training requests', err);
      return { status: 500, jsonBody: { error: 'storage_failure' } };
    }

    items.sort((a, b) => (b.submittedAt || '').localeCompare(a.submittedAt || ''));
    return { status: 200, jsonBody: { items, count: items.length } };
  }
});

function serialize(entity) {
  return {
    id: `${entity.partitionKey}/${entity.rowKey}`,
    partitionKey: entity.partitionKey,
    rowKey: entity.rowKey,
    name: entity.Name,
    email: entity.Email,
    phone: entity.Phone,
    instructorId: entity.InstructorId,
    instructorName: entity.InstructorName,
    duprOrSkill: entity.DuprOrSkill,
    goals: entity.Goals,
    preferredTimes: entity.PreferredTimes,
    notes: entity.Notes,
    status: entity.Status,
    submittedAt: entity.SubmittedAt instanceof Date ? entity.SubmittedAt.toISOString() : entity.SubmittedAt,
    userAgent: entity.UserAgent,
    adminNotes: entity.AdminNotes || '',
    etag: entity.etag
  };
}
