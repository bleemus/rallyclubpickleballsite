const { getTableClient, TABLES } = require('./table-client');

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const MAX_PER_HOUR = 3;
const MAX_PER_DAY = 10;

async function checkRateLimit(ipHash) {
  const client = getTableClient(TABLES.RateLimitEvents);
  const now = Date.now();
  const hourCutoff = now - HOUR_MS;
  const dayCutoff = now - DAY_MS;

  let hourCount = 0;
  let dayCount = 0;

  const iterator = client.listEntities({
    queryOptions: { filter: `PartitionKey eq '${ipHash}'` }
  });

  for await (const row of iterator) {
    const ts = Number(row.rowKey);
    if (!Number.isFinite(ts)) continue;
    if (ts >= hourCutoff) hourCount++;
    if (ts >= dayCutoff) dayCount++;
    if (hourCount >= MAX_PER_HOUR || dayCount >= MAX_PER_DAY) {
      return true;
    }
  }
  return false;
}

async function recordAttempt(ipHash) {
  const client = getTableClient(TABLES.RateLimitEvents);
  await client.createEntity({
    partitionKey: ipHash,
    rowKey: String(Date.now())
  });
}

module.exports = { checkRateLimit, recordAttempt, MAX_PER_HOUR, MAX_PER_DAY };
