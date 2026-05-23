const crypto = require('crypto');

function sha256Hex(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

function hashIp(ip) {
  const salt = process.env.IP_SALT || '';
  if (!salt) {
    throw new Error('IP_SALT app setting is not configured');
  }
  return sha256Hex(`${ip}|${salt}`);
}

function computeDedupeHash(email, phone) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPhone = String(phone || '').replace(/\D/g, '');
  return sha256Hex(`${normalizedEmail}|${normalizedPhone}`);
}

function newRowKey() {
  const reverseEpoch = (9999999999999 - Date.now()).toString().padStart(13, '0');
  const suffix = crypto.randomUUID().slice(0, 8);
  return `${reverseEpoch}-${suffix}`;
}

module.exports = { sha256Hex, hashIp, computeDedupeHash, newRowKey };
