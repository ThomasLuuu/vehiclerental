const router = require('express').Router();
const verifyToken = require('../middleWares/verifyToken.js');
const userController = require('../controller/user.controller.js');
const vehicleController = require('../controller/vehicle.controller.js');

//User PATH
router.route('/').get( userController.getAllUsers);
router.route('/search').get(verifyToken,userController.getUserBySearch);
router.route('/search/:id').get(userController.getUserById);
router.route('/update/:id').post(userController.updateUserById);

//User-Vehicle PATH
router.route('/createvehicle').post(vehicleController.createVehicle);
router.route('/vehicle').get( vehicleController.getAllVehicles);
router.route('/vehicle/search/:id').get(vehicleController.getVehicleById);
router.route('/vehicle/update/:id').post(vehicleController.updateVehicleById);
router.route('/vehicle/delete/:id').post(vehicleController.deleteVehicleById);
router.route('/vehicle/delete/search/:id').get(vehicleController.searchDeletedVehicleById);
module.exports = router;
