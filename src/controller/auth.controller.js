const { ResponseService, AuthService } = require('../services');
const { catchAsync } = require('../utils');

const register = catchAsync(async (req, res) => {
  const { username, email, password } = req.body;
  await AuthService.register(username, email, password);
  res.status(200).json(ResponseService.newSucess());
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const token = await AuthService.login(email, password);
  if (!token) {
    throw ResponseService.newError(Error.TokenNotCreated.errCode, Error.TokenNotCreated.errMessage);
  }
  res.header('auth-token', token).send(token);
});

module.exports = { register, login };
