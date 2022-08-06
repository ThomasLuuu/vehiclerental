const { ObjectId } = require('mongodb');
const Understand = require('twilio/lib/rest/preview/Understand.js');
const User = require('../../models/user.model.js');

const getUser = async() =>{
    const user = await User.find({});
    return user;
};

const getUserById = async(idSearch) =>{
    let user = undefined;
    user = await User.findOne({'_id':ObjectId(idSearch)});
    return user;
};

const getUserBySearch = async(searchFilter) =>{
    var user = undefined;
    switch(searchFilter.includes('@')){
    case true:
        user = await User.find({email:searchFilter});
        return user;
    case false:
        user = await User.find({username:searchFilter});
        return user;
    }
};

const updateUserById = async(userInfo,userId) => {
    let newUser = await User.findOneAndUpdate({'_id':ObjectId(userId)}, {$set: userInfo});
    return newUser;
}
<<<<<<< HEAD

const updateUserById = async(id) =>{
    let id = params.id;
    

}
module.exports = {getUser, getUserBySearch, updateUserById};
=======
module.exports = {getUser, getUserBySearch , getUserById, updateUserById};
>>>>>>> beaedc0f8aa53dbd7b684b381a4f7e85bc15b523
