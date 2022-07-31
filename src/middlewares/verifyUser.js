const { Error, authHeaderPrefix } = require('../configs');
const { ResponseService, JwtService } = require('../services');

module.exports = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) next(ResponseService.newError(Error.AuthHeaderEmpty.errCode, Error.AuthHeaderEmpty.errMessage));

  const bearer = authHeader.split(' ')[0];
  if (bearer !== authHeaderPrefix)
    next(ResponseService.newError(Error.AuthHeaderInvalid.errCode, Error.AuthHeaderInvalid.errMessage));

  const token = authHeader.split(' ')[1];

  try {
    const userId = await JwtService.tokenVerified(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = userId;
    next();
  } catch (err) {
    next(err);
  }
};
