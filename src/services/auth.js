const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/user.model.js');
const { registerValidator } = require('../utils/auth.validation.js');

router.post('/register', async (req, res) => {
  const { err } = registerValidator(req.body);

  if (err) return res.status(422).send(err.details[0].message);

  const checkEmailExist = await User.findOne({ email: req.body.email });

  if (checkEmailExist) return res.status(422).send('this email already exists');
  const { username, email, password } = req.body;
  console.log(req.body.password);
  const newUser = new User({
    username,
    email,
    password,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      console.log(newUser.password);
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then((user) => console.log('successful'))
        .catch((err) => console.log(err));
    });
  });
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(200).send('email or password is invalid');
  const checkPassword = await bcrypt.compare(req.body.password, user.password);
  if (!checkPassword) return res.status(200).send('password is incorrect');
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });
  return res.header('auth-token', token).send(token);
});

module.exports = router;
