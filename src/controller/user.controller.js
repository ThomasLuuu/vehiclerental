const {responseService} = require('../services/response/response.service.js');
const {catchAsync} = require('../utils');
const verifyToken = require('../middleWares/verifyUser.js');
const UserService = require('../services/user/user.js');
// const indexService = require('../services/index.js');
const Error = require('../config/error')

const getAllUsers = catchAsync(async (req, res) =>{
    const user = await UserService.getUser();
    if(!user) throw responseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);   
    res.status(200).json(user);
});

const getUserById = catchAsync(async (req, res) => {
    const user = await UserService.getUserById(req.params.id);
    if(!user) throw responseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage); 
    res.status(200).json(user);
});

const getUserBySearch = catchAsync(async (req, res) => {
    const user = await UserService.getUserBySearch(req.body.searchFilter);
    if(!user) throw responseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
    res.status(200).json(user);
});

const updateUserById = catchAsync(async (req, res) => {
    let idObject = req.params.id;
    const updateUserInfo = await UserService.updateUserById(req.body, idObject);
    if(!updateUserInfo) throw responseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
    res.status(200).json(updateUserInfo);
    
});

module.exports = {getAllUsers,getUserBySearch, getUserById, updateUserById};