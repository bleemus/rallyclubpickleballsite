const { TableClient } = require('@azure/data-tables');

const clientCache = new Map();

function getTableClient(tableName) {
  if (clientCache.has(tableName)) {
    return clientCache.get(tableName);
  }
  const conn = process.env.AZURE_STORAGE_CONNECTION_STRING;
  if (!conn) {
    throw new Error('AZURE_STORAGE_CONNECTION_STRING app setting is not configured');
  }
  const client = TableClient.fromConnectionString(conn, tableName, { allowInsecureConnection: false });
  clientCache.set(tableName, client);
  return client;
}

const TABLES = {
  TrainingRequests: 'TrainingRequests',
  RateLimitEvents: 'RateLimitEvents'
};

module.exports = { getTableClient, TABLES };
