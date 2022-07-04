const mongoose = require('mongoose');
var app = require('express')();

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    password:{
        type: String
    },
    email:{
        type: String
    }})
const User = mongoose.model('User', UserSchema);
module.exports = User;