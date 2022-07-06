const express = require('express');
const User = require('../models/user.model.js');
const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken.js');
const userController = require('../controller/user.controller.js');
// router.get('/', verifyToken, (req, res) => {
//   User.find({}).exec(function (err, users) {
//     res.send(users);
//   });
// });
router.route('/').get(userController.getAllUsers);
module.exports = router;
