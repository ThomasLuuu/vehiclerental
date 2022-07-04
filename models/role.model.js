const mongoose = require('mongoose');
var app = require('express')();
const Role = new mongoose.model('role',
new mongoose.Schema({
    name: String,
})
);

module.exports = Role;