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

function isPreviewHost(host) {
  if (!host) return false;
  const bare = host.toLowerCase().split(':')[0];
  return PREVIEW_HOST_RE.test(bare);
}

function chooseSecret(host) {
  if (isPreviewHost(host)) return TEST_SECRET;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    throw new Error('TURNSTILE_SECRET_KEY app setting is not configured');
  }
  return secret;
}

async function verifyTurnstile(token, remoteIp, host) {
  if (!token) return false;
  const secret = chooseSecret(host);

  const body = new URLSearchParams();
  body.append('secret', secret);
  body.append('response', token);
  if (remoteIp && remoteIp !== 'unknown') {
    body.append('remoteip', remoteIp);
  }

  try {
    const res = await fetch(VERIFY_URL, { method: 'POST', body });
    if (!res.ok) return false;
    const data = await res.json();
    return data && data.success === true;
  } catch {
    return false;
  }
}

module.exports = { verifyTurnstile, isPreviewHost };
