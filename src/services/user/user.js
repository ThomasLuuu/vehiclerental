const User = require('../../models/user.model.js');

const getUser = async() =>{
    const user = await User.find({});
    return user;
}
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

}
module.exports = {getUser, getUserBySearch};