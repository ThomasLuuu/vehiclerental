const jwt = require('jsonwebtoken');
const ResponseService = require('../response/response.service');
const { Error } = require('../../config');

const genToken = async (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 * 20 });
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });

  return { accessToken, refreshToken };
};

const tokenVerified = async (token, secret) => {
  if (!token) throw ResponseService.newError(Error.TokenMissing.errCode, Error.TokenMissing.errMessage);
  if (!secret) throw ResponseService.newError(Error.SecretMissing.errCode, Error.SecretMissing.errMessage);
  try {
    const { userId } = jwt.verify(token, secret);
    return userId;
  } catch (err) {
    throw ResponseService.newError(Error.TokenInvalid.errCode, err.message);
  }
};

module.exports = { genToken, tokenVerified };
