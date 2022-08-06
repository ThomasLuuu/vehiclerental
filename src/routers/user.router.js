const router = require('express').Router();
<<<<<<< HEAD
<<<<<<< HEAD
const verifyToken = require('../middleWares/verifyToken.js');
=======
const verifyToken = require('../middleWares/verifyUser.js');
>>>>>>> beaedc0f8aa53dbd7b684b381a4f7e85bc15b523
const userController = require('../controller/user.controller.js');
const vehicleController = require('../controller/vehicle.controller.js');
=======
const { User } = require('../models');
const { verifyUser } = require('../middlewares');

router.get('/', verifyUser, (req, res) => {
  console.log(req.userId);
  User.find({}).exec(function (err, users) {
    res.send(users);
  });
});

//User PATH
// router.route('/').get( userController.getAllUsers);
router.route('/search').get(verifyToken,userController.getUserBySearch);
<<<<<<< HEAD
router.route('/update/:idUser').get(verifyToken,userController.updateUserById);
//User-Vehicle PATH
router.route('/createVehicle').post(vehicleController.createVehicle);
router.route('/vehicle').get(verifyToken, vehicleController.getAllVehicles);
=======
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


>>>>>>> beaedc0f8aa53dbd7b684b381a4f7e85bc15b523
module.exports = router;
