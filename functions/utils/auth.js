const getTokenFromHeaders = (headers) => {
  const rawAuth = headers.authorization;
  if (!rawAuth) return null;
  const authParts = rawAuth.split(' ');
  if (authParts[0] !== 'Bearer' || authParts.length !== 2) return null;
  return authParts[1];
};

module.exports = {
  getTokenFromHeaders,
};
