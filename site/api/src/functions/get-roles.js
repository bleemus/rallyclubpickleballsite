const { app } = require('@azure/functions');

app.http('get-roles', {
  methods: ['POST'],
  route: 'get-roles',
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    let payload;
    try {
      payload = await req.json();
    } catch {
      return { status: 200, jsonBody: { roles: [] } };
    }

    const identityProvider = (payload && payload.identityProvider) || '';
    const userDetails = (payload && payload.userDetails) || '';

    if (identityProvider !== 'github' || !userDetails) {
      return { status: 200, jsonBody: { roles: [] } };
    }

    const adminLoginsRaw = process.env.ADMIN_GITHUB_LOGINS || process.env.ADMIN_GITHUB_LOGIN || '';
    const adminLogins = adminLoginsRaw
      .split(',')
      .map(s => s.trim().toLowerCase())
      .filter(Boolean);

    if (adminLogins.includes(userDetails.toLowerCase())) {
      ctx.log(`Granting admin role to ${userDetails}`);
      return { status: 200, jsonBody: { roles: ['admin'] } };
    }

    return { status: 200, jsonBody: { roles: [] } };
  }
});
