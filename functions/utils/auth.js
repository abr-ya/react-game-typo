const jwt = require('jsonwebtoken');
const jwks = require('jwks-rsa');
const { promisify } = require('util');

const jwksClient = jwks({
  jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
});

const getTokenFromHeaders = (headers) => {
  const rawAuth = headers.authorization;
  if (!rawAuth) return null;
  const authParts = rawAuth.split(' ');
  if (authParts[0] !== 'Bearer' || authParts.length !== 2) return null;
  return authParts[1];
};

const validateToken = async (token) => {
  try {
    const decodedToken = jwt.decode(token, { complete: true });
    const { kid, alg } = decodedToken.header;
    const getSigningKey = promisify(jwksClient.getSigningKey);
    const key = await getSigningKey(kid);
    const signingKey = key.publicKey;

    const options = { algorithms: alg };
    jwt.verify(token, signingKey, options);
    return decodedToken.payload;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  getTokenFromHeaders,
  validateToken,
};
