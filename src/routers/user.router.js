const router = require('express').Router();
const { User } = require('../models');
const { verifyUser } = require('../middlewares');

router.get('/', verifyUser, (req, res) => {
  console.log(req.userId);
  User.find({}).exec(function (err, users) {
    res.send(users);
  });
});

module.exports = router;
