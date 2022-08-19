const { ResponseService, UserService } = require('../services');
const { catchAsync } = require('../utils');
const Error = require('../configs/error');

const getAllUsers = catchAsync(async (req, res) => {
  const user = await UserService.getUser();
  if (!user) throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
  res.status(200).json(ResponseService.newSuccess(user));
});

const getUserById = catchAsync(async (req, res) => {
  const user = await UserService.getUserById(req.params.id);
  if (!user) throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
  res.status(200).json(ResponseService.newSuccess(user));
});

const getUserBySearch = catchAsync(async (req, res) => {
  const user = await UserService.getUserBySearch(req.body.searchFilter);
  if (!user) throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
  res.status(200).json(ResponseService.newSuccess(user));
});

const updateUserById = catchAsync(async (req, res) => {
  const idObject = req.params.id;
  const updateUserInfo = await UserService.updateUserById(req.body, idObject);
  if (!updateUserInfo) throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
  res.status(200).json(ResponseService.newSuccess(updateUserInfo));
});

module.exports = { getAllUsers, getUserBySearch, getUserById, updateUserById };
