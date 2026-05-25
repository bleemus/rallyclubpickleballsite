// Generates a local-dev-only copy of staticwebapp.config.json with the
// custom identityProviders section stripped, so the SWA CLI emulator falls
// back to its mock login form instead of trying to proxy to real GitHub OAuth.
// Production keeps using the unmodified root staticwebapp.config.json.

const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', 'staticwebapp.config.json');
const OUT_DIR = path.resolve(__dirname, '..', '.swa-local');
const OUT = path.join(OUT_DIR, 'staticwebapp.config.json');

const src = JSON.parse(fs.readFileSync(SRC, 'utf8'));
if (src.auth) delete src.auth.identityProviders;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(src, null, 2));
console.log('[dev:swa] wrote local config (no identityProviders) ->', OUT);
