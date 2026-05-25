const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

// Cloudflare's public, documented always-passes Turnstile test keys.
// Site key 1x00000000000000000000AA pairs with secret 1x0000000000000000000000000000000AA.
// Cloudflare's siteverify enforces the pair, so a token issued with these test keys
// cannot be validated against any other secret (and vice-versa). Safe to commit.
const TEST_SECRET = '1x0000000000000000000000000000000AA';

// Matches SWA per-PR preview hostnames like
//   calm-hill-089551810-18.centralus.4.azurestaticapps.net
// but NOT the bare prod SWA hostname
//   calm-hill-089551810.centralus.4.azurestaticapps.net
// The digit count is capped at 1-5 to distinguish a PR number (small) from the SWA's
// own 9-digit app suffix. (PR numbers in this repo will not realistically hit 100,000.)
const PREVIEW_HOST_RE = /-\d{1,5}\.[a-z0-9-]+\.\d+\.azurestaticapps\.net$/i;

// On SWA Managed Functions the only header that carries the user-facing
// hostname is `x-ms-original-url` — `host`, `disguised-host`, and
// `x-forwarded-host` all return the internal Function App container name
// (`<uuid>.azurewebsites.net`) which is useless for preview detection.
// Other headers are kept as fallbacks for unrelated runtime contexts.
const HOST_HEADER_FALLBACKS = ['x-forwarded-host', 'x-original-host', 'host'];

function normalizeHost(value) {
  if (!value) return '';
  const first = String(value).split(',')[0].trim();
  return first.toLowerCase().split(':')[0];
}

function getRequestHost(req) {
  if (!req || !req.headers) return '';
  const originalUrl = req.headers.get('x-ms-original-url');
  if (originalUrl) {
    try {
      const h = normalizeHost(new URL(originalUrl).hostname);
      if (h) return h;
    } catch { /* ignore */ }
  }
  for (const name of HOST_HEADER_FALLBACKS) {
    const v = req.headers.get(name);
    if (v) {
      const h = normalizeHost(v);
      if (h) return h;
    }
  }
  return '';
}

function isPreviewHost(host) {
  if (!host) return false;
  return PREVIEW_HOST_RE.test(normalizeHost(host));
}

function chooseSecret(host) {
  if (isPreviewHost(host)) return TEST_SECRET;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    throw new Error('TURNSTILE_SECRET_KEY app setting is not configured');
  }
  return secret;
}

async function verifyTurnstile(token, remoteIp, host, logger) {
  if (!token) return false;
  const preview = isPreviewHost(host);
  const secret = preview
    ? TEST_SECRET
    : (process.env.TURNSTILE_SECRET_KEY || '');

  if (!secret) {
    if (logger) logger('Turnstile: no secret available (host not preview, TURNSTILE_SECRET_KEY unset)', { host });
    return false;
  }

  const body = new URLSearchParams();
  body.append('secret', secret);
  body.append('response', token);
  if (remoteIp && remoteIp !== 'unknown') {
    body.append('remoteip', remoteIp);
  }

  try {
    const res = await fetch(VERIFY_URL, { method: 'POST', body });
    if (!res.ok) {
      if (logger) logger('Turnstile siteverify HTTP error', { status: res.status, host, preview });
      return false;
    }
    const data = await res.json();
    if (data && data.success === true) return true;
    if (logger) {
      logger('Turnstile siteverify rejected', {
        host,
        preview,
        secretMode: preview ? 'test' : 'prod',
        errorCodes: data && data['error-codes']
      });
    }
    return false;
  } catch (err) {
    if (logger) logger('Turnstile siteverify threw', { host, preview, error: err && err.message });
    return false;
  }
}

module.exports = { verifyTurnstile, isPreviewHost, getRequestHost };
