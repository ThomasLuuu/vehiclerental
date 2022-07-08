const jwt = require('jsonwebtoken');
const { Error } = require('../config');
const { ResponseService } = require('../services');

module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  if (!token) next(ResponseService.newError(Error.TokenMissing.errCode, Error.TokenMissing.errMessage));

  try {
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    next(ResponseService.newError(Error.TokenInvalid.errCode, err.message));
  }
};
