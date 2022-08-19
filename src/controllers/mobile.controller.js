const { ResponseService, MobileService } = require('../services');
const { catchAsync } = require('../utils');
const { Error } = require('../configs');

const sendCode = catchAsync(async (req, res) => {
  const userId = req.params.id;

  const { phone } = req.body;
  if (!phone) throw ResponseService.newError(Error.PhoneEmpty.errCode, Error.PhoneEmpty.errMessage);

  const user = await MobileService.sendCode(userId, phone);
  if (!user) throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);

  res.status(200).json(ResponseService.newSuccess(user));
});

const verify = catchAsync(async (req, res) => {
  const userId = req.params.id;
  // eslint-disable-next-line prefer-destructuring
  const code = req.params.code;

  await MobileService.verify(userId, code);
  res.status(200).json(ResponseService.newSuccess());
});

module.exports = { sendCode, verify };
