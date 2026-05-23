const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function verifyTurnstile(token, remoteIp) {
  if (!token) return false;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    throw new Error('TURNSTILE_SECRET_KEY app setting is not configured');
  }

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

module.exports = { verifyTurnstile };
