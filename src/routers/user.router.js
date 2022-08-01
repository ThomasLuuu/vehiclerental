const router = require('express').Router();
const { verifyUser } = require('../middlewares');
const { User } = require('../models');
const { UserController } = require('../controllers');

// router.route('/').get( userController.getAllUsers);
router.route('/search').get(verifyUser, UserController.getUserBySearch);
router.route('/search/:id').get(verifyUser, UserController.getUserById);
router.route('/update/:id').post(verifyUser, UserController.updateUserById);
router.get('/', verifyUser, (req, res) => {
  console.log(req.userId);
  User.find({}).exec(function (err, users) {
    res.send(users);
  });
});

module.exports = router;
