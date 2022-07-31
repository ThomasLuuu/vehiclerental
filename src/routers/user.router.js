const router = require('express').Router();
const verifyToken = require('../middleWares/verifyUser.js');
const userController = require('../controller/user.controller.js');
const vehicleController = require('../controller/vehicle.controller.js');

//User PATH
// router.route('/').get( userController.getAllUsers);
router.route('/search').get(verifyToken,userController.getUserBySearch);
router.route('/search/:id').get(userController.getUserById);
router.route('/update/:id').post(userController.updateUserById);
const { User } = require('../models');
const { verifyUser } = require('../middlewares');

router.get('/', verifyUser, (req, res) => {
  console.log(req.userId);
  User.find({}).exec(function (err, users) {
    res.send(users);
  });
});


module.exports = router;
