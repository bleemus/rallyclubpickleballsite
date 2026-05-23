const { app } = require('@azure/functions');
const { getTableClient, TABLES } = require('../lib/table-client');

app.http('delete-training-request', {
  methods: ['DELETE'],
  route: 'admin/requests/{partitionKey}/{rowKey}',
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    const partitionKey = req.params.partitionKey;
    const rowKey = req.params.rowKey;
    if (!partitionKey || !rowKey) {
      return { status: 400, jsonBody: { error: 'missing_id' } };
    }

    try {
      await getTableClient(TABLES.TrainingRequests).deleteEntity(partitionKey, rowKey);
    } catch (err) {
      ctx.log('Failed to delete training request', err);
      if (err && err.statusCode === 404) {
        return { status: 404, jsonBody: { error: 'not_found' } };
      }
      return { status: 500, jsonBody: { error: 'storage_failure' } };
    }

    return { status: 200, jsonBody: { ok: true } };
  }
});
