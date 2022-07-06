const {ResponseService, VehicleService} = require('../services');
const {catchAsync} = require('../utils');
const Error = require('../config/error')
const createVehicle = catchAsync( async(req, res, next) => {
    const {name, version, price, plate} = req.body;
    await VehicleService.createVehicle(name, version, price,plate);
    res.status(200).json(ResponseService.newSuccess())
});


const getAllVehicles = catchAsync(async (req, res) =>{
    const vehicle = await VehicleService.getVehicle();
    if(!vehicle) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);   
    res.status(200).json(vehicle);
});


module.exports = {createVehicle, getAllVehicles};