const { app } = require('@azure/functions');
const { getTableClient, TABLES } = require('../lib/table-client');
const { validateStatus, STATUSES, FIELD_LIMITS } = require('../lib/validate');

app.http('update-training-request', {
  methods: ['PATCH'],
  route: 'admin/requests/{partitionKey}/{rowKey}',
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    const partitionKey = req.params.partitionKey;
    const rowKey = req.params.rowKey;
    if (!partitionKey || !rowKey) {
      return { status: 400, jsonBody: { error: 'missing_id' } };
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return { status: 400, jsonBody: { error: 'invalid_json' } };
    }

    const patch = { partitionKey, rowKey };
    let hasChange = false;

    if (typeof body.status === 'string') {
      if (!validateStatus(body.status)) {
        return { status: 400, jsonBody: { error: 'invalid_status', allowed: [...STATUSES] } };
      }
      patch.Status = body.status;
      hasChange = true;
    }

    if (typeof body.adminNotes === 'string') {
      const notes = body.adminNotes.trim();
      if (notes.length > 2000) {
        return { status: 400, jsonBody: { error: 'admin_notes_too_long' } };
      }
      patch.AdminNotes = notes;
      hasChange = true;
    }

    if (!hasChange) {
      return { status: 400, jsonBody: { error: 'no_changes' } };
    }

    try {
      await getTableClient(TABLES.TrainingRequests).updateEntity(patch, 'Merge');
    } catch (err) {
      ctx.log('Failed to update training request', err);
      if (err && err.statusCode === 404) {
        return { status: 404, jsonBody: { error: 'not_found' } };
      }
      return { status: 500, jsonBody: { error: 'storage_failure' } };
    }

    return { status: 200, jsonBody: { ok: true } };
  }
});
