const express = require('express');
const User = require('../models/user.model.js');
const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken.js');

router.get('/', verifyToken, (req, res) => {
  User.find({}).exec(function (err, users) {
    res.send(users);
  });
});

module.exports = router;
