const { getTableClient, TABLES } = require('./table-client');

const DEDUPE_WINDOW_DAYS = 7;
const DEDUPE_WINDOW_MS = DEDUPE_WINDOW_DAYS * 24 * 60 * 60 * 1000;

function monthKey(date) {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  return `${yyyy}-${mm}`;
}

function recentMonthKeys() {
  const now = new Date();
  const current = monthKey(now);
  const prev = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
  return [current, monthKey(prev)];
}

async function isDuplicate(dedupeHash) {
  const client = getTableClient(TABLES.TrainingRequests);
  const cutoff = Date.now() - DEDUPE_WINDOW_MS;
  const partitions = recentMonthKeys();

  for (const partition of partitions) {
    const iterator = client.listEntities({
      queryOptions: {
        filter: `PartitionKey eq '${partition}' and DedupeHash eq '${dedupeHash}'`
      }
    });
    for await (const row of iterator) {
      const submittedAt = row.SubmittedAt instanceof Date ? row.SubmittedAt.getTime() : Date.parse(row.SubmittedAt);
      if (Number.isFinite(submittedAt) && submittedAt >= cutoff) {
        return true;
      }
    }
  }
  return false;
}

module.exports = { isDuplicate, monthKey, recentMonthKeys, DEDUPE_WINDOW_DAYS };
