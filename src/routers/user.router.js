const router = require('express').Router();
const verifyToken = require('../middleWares/verifyToken.js');
const userController = require('../controller/user.controller.js');
const vehicleController = require('../controller/vehicle.controller.js');

//User PATH
router.route('/').get( verifyToken,userController.getAllUsers);
router.route('/search').get(verifyToken,userController.getUserBySearch);
//User-Vehicle PATH
router.route('/createVehicle').post(vehicleController.createVehicle);
router.route('/vehicle').get(verifyToken, vehicleController.getAllVehicles);
module.exports = router;
