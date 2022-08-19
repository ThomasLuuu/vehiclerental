const { ObjectId } = require('mongodb');
// const Understand = require('twilio/lib/rest/preview/Understand.js');
const { User } = require('../../models');

const getUser = async () => {
  const user = await User.find({});
  return { user };
};

const getUserById = async (idSearch) => {
  const user = await User.findOne({ _id: ObjectId(idSearch) });
  return { user };
};

const getUserBySearch = async (searchFilter) => {
  let user;
  switch (searchFilter.includes('@')) {
    case true:
      user = await User.find({ email: searchFilter });
      return { user };
    default:
      user = await User.find({ username: searchFilter });
      return { user };
  }
};

const updateUserById = async (userInfo, userId) => {
  const newUser = await User.findOneAndUpdate({ _id: ObjectId(userId) }, { $set: userInfo });
  return { newUser };
};
module.exports = { getUser, getUserBySearch, getUserById, updateUserById };
