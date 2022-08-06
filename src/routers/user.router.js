const router = require('express').Router();
<<<<<<< HEAD
const verifyToken = require('../middleWares/verifyToken.js');
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
router.route('/').get( verifyToken,userController.getAllUsers);
router.route('/search').get(verifyToken,userController.getUserBySearch);
router.route('/update/:idUser').get(verifyToken,userController.updateUserById);
//User-Vehicle PATH
router.route('/createVehicle').post(vehicleController.createVehicle);
router.route('/vehicle').get(verifyToken, vehicleController.getAllVehicles);
module.exports = router;
