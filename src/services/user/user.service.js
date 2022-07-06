const responseService = require('../response/response.service.js');
const User = require('../../models/user.model.js');
const catchAsync = require('../../utils/catchAsync.js');

const getUser = function(){
    const user =  User.find({});
    // responseService.newSucess(user);
    return user;
};
module.exports = getUser;