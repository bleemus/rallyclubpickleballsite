function getClientPrincipal(req) {
  const header = req.headers.get('x-ms-client-principal');
  if (!header) return null;
  try {
    const json = Buffer.from(header, 'base64').toString('utf8');
    return JSON.parse(json);
  } catch {
    return null;
  }
}

module.exports = { getClientPrincipal };
