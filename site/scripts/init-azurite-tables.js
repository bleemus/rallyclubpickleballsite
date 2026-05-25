// Local-dev only: creates the TrainingRequests and RateLimitEvents tables in
// Azurite so the api functions can write to them. In production these tables
// are provisioned by infra/storage.bicep, so this script is never run there.

const { TableClient } = require('../api/node_modules/@azure/data-tables');

const CONN = 'UseDevelopmentStorage=true';
const TABLES = ['TrainingRequests', 'RateLimitEvents'];

(async () => {
  for (const name of TABLES) {
    const client = TableClient.fromConnectionString(CONN, name);
    try {
      await client.createTable();
      console.log(`[dev:tables] created ${name}`);
    } catch (err) {
      if (err && (err.statusCode === 409 || /already exists/i.test(err.message))) {
        console.log(`[dev:tables] ${name} already exists`);
      } else {
        console.error(`[dev:tables] failed to create ${name}:`, err.message || err);
        process.exitCode = 1;
      }
    }
  }
})();
