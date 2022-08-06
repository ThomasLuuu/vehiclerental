const {responseService} = require('../services/response/response.service.js');
const {catchAsync} = require('../utils');
const verifyToken = require('../middleWares/verifyToken.js');
const UserService = require('../services/user/user.js');
// const indexService = require('../services/index.js');
const Error = require('../config/error')
const getAllUsers = catchAsync(async (req, res) =>{
    const user = await UserService.getUser();
    if(!user) throw responseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);   
    res.status(200).json(user);
});

const getUserBySearch = catchAsync(async (req, res) =>{
    const user = await UserService.getUserBySearch(req.body.searchFilter);
    if(!user) throw responseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
    res.status(200).json(user);
})

const updateUserById = catchAsync(async (req, res) =>{
    const userID = req.params.idUser;
    const user = 

})
module.exports = {getAllUsers,getUserBySearch, updateUserById};