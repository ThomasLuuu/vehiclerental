const express = require('express');
const User = require('../models/user.model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    User.find({}).exec(function (err, users) {
        res.send(users);
    });
});

module.exports = router;