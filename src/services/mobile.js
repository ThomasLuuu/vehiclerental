require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/user.model.js');

const codeVerify = (Math.random() + 1).toString(36).substring(7);
router.post('/verify/:id', function (req, res) {
  const phoneVerification = req.body.phone;
  const idUser = req.params.id;
  console.log(idUser);
  if (phoneVerification.length < 11 || phoneVerification.length > 13) {
    res.send('wrong phone verification number');
  } else {
    client.messages
      .create({
        body: `This is verification code ${codeVerify}, don't share it with others.`,
        from: '+18599045904',
        to: `${phoneVerification}`,
      })
      .then((message) => console.log(message.sid));
  }

  User.findByIdAndUpdate({ _id: idUser }, { codeActive: codeVerify }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post('/verify/:id/:code', function (req, res) {
  User.findById(req.params.id, function (err, result) {
    if (err) {
      res.send(err);
    } else if ((result = req.params.code)) {
      User.findByIdAndUpdate({ _id: req.params.id }, { verify: true }, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    } else {
      res.send('Wrong code activate');
    }
  }).select({ _id: 0, codeActive: 1 });
});

module.exports = router;
