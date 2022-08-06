//User-Vehicle PATH
const router = require('express').Router();
const verifyToken = require('../middleWares/verifyUser.js');
const vehicleController = require('../controller/vehicle.controller.js');

router.route('/').get( vehicleController.getAllVehicles);
router.route('/createvehicle').post(vehicleController.createVehicle);
router.route('/search/:id').get(vehicleController.getVehicleById);
router.route('/update/:id').post(vehicleController.updateVehicleById);
router.route('/delete/:id').post(vehicleController.deleteVehicleById);
router.route('/delete/search/:id').get(vehicleController.searchDeletedVehicleById);

module.exports = router;
