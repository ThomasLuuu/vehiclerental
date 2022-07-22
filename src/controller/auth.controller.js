const { ResponseService, AuthService } = require('../services');
const { catchAsync } = require('../utils');

const register = catchAsync(async (req, res) => {
  const { username, email, password } = req.body;
  await AuthService.register(username, email, password);
  res.status(200).json(ResponseService.newSucess());
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const { refreshToken, accessToken } = await AuthService.login(email, password);

  res.cookie('refreshToken', refreshToken, { maxAge: 60 * 60 * 24, httpOnly: true });
  res.header('Authorization', `Bearer ${accessToken}`).json(ResponseService.newSucess());
});

const genRefreshAndAccess = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  const { accessToken, newRefreshToken } = await AuthService.genRefreshAndAccess(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );

  res.cookie('refreshToken', newRefreshToken, { maxAge: 60 * 60 * 24, httpOnly: true });
  res.header('Authorization', `Bearer ${accessToken}`).json(ResponseService.newSucess());
});

const logout = catchAsync(async (req, res) => {
  res.cookie('refreshToken', '');
  res.header('Authorization', '').json(ResponseService.newSucess());
});

module.exports = { register, login, logout, genRefreshAndAccess };
