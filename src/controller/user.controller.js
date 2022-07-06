const {responseService} = require('../services/response/response.service.js');
const {catchAsync} = require('../utils');
const verifyToken = require('../middlewares/verifyToken.js');
// const indexService = require('../services/index.js');
const User = require('../models/user.model.js');
const UserService = require('../services/user/user.service.js');
const getAllUsers = catchAsync(async (req, res) =>{
    const user = await User.find({})
    const check = UserService;
    console.log(check);
     // suppose to be in service session
    //  const user = Buffer.from(JSON.stringify());
    if(!user) {
            throw indexService.ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
        }
    res.send(user);
});
module.exports = {getAllUsers};