// Generates a local-dev-only copy of staticwebapp.config.json with the whole
// auth block stripped, so the SWA CLI emulator falls back to its mock login
// form instead of trying to proxy to real GitHub OAuth.
// Production keeps using the unmodified root staticwebapp.config.json.
//
// Strip the entire `auth` object, not just identityProviders: the CLI's schema
// marks identityProviders as required whenever `auth` is present, so leaving a
// lone rolesSource behind fails validation and the emulator silently discards
// the *whole* config — routes included, which left /admin/* and /api/manage/*
// ungated locally. Losing rolesSource just means the mock login form won't be
// assigned roles automatically; type "admin" into its roles field to test the
// gate.

const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', 'staticwebapp.config.json');
const OUT_DIR = path.resolve(__dirname, '..', '.swa-local');
const OUT = path.join(OUT_DIR, 'staticwebapp.config.json');

const src = JSON.parse(fs.readFileSync(SRC, 'utf8'));
delete src.auth;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(src, null, 2));
console.log('[dev:swa] wrote local config (no auth block) ->', OUT);
