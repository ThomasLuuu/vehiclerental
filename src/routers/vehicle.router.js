// User-Vehicle PATH
const router = require('express').Router();
const { verifyUser } = require('../middlewares');
const { VehicleController } = require('../controllers');

router.route('/').get(VehicleController.getAllVehicles);
router.route('/createvehicle').post(verifyUser, VehicleController.createVehicle);
router.route('/search/:id').get(verifyUser, VehicleController.getVehicleById);
router.route('/update/:id').post(verifyUser, VehicleController.updateVehicleById);
router.route('/delete/:id').post(verifyUser, VehicleController.deleteVehicleById);
router.route('/delete/search/:id').get(verifyUser, VehicleController.searchDeletedVehicleById);

module.exports = router;
