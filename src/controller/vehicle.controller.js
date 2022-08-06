const {ResponseService, VehicleService} = require('../services');
const {catchAsync} = require('../utils');
const Error = require('../config/error');
const { getVehicle } = require('../services/vehicle/vehicle');

const createVehicle = catchAsync( async(req, res, next) => {
    const {name, version, price, plate} = req.body;
    await VehicleService.createVehicle(name, version, price,plate);
    res.status(200).json(ResponseService.newSuccess())
});

const getVehicleById = catchAsync( async(req, res) => {
    const vehicle = await VehicleService.getVehicleById(req.params.id);
    if(!vehicle) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);   
    res.status(200).json(vehicle);
});

const getAllVehicles = catchAsync(async (req, res) =>{
    const vehicle = await VehicleService.getVehicle();
    if(!vehicle) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);   
    res.status(200).json(vehicle);
});

const updateVehicleById = catchAsync(async (req, res) =>{
    let vehicleUpdate = req.body;
    let vehicleId = req.params.id;
    const newVehicle = await VehicleService.updateVehicleById(vehicleUpdate, vehicleId);
    if(!newVehicle) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);   
    res.status(200).json(newVehicle);
});

const deleteVehicleById = catchAsync(async (req, res) =>{
    let vehicleDelete = req.params.id;
    const vehicleDeleted = await VehicleService.deleteVehicleById(vehicleDelete);
    if(!vehicleDeleted) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);   
    res.status(200).json(vehicleDeleted);
});

const searchDeletedVehicleById = catchAsync(async (req, res) =>{
    let vehicleId = req.params.id;
    const vehicleDeleted = await VehicleService.searchVehicleByIdDeleted(vehicleId);
    if(!vehicleDeleted) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);   
    res.status(200).json(vehicleDeleted);

});

module.exports = {createVehicle, getAllVehicles, getVehicleById, updateVehicleById, deleteVehicleById, searchDeletedVehicleById};