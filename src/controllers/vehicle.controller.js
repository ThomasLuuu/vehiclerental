const { ResponseService, VehicleService } = require('../services');
const { catchAsync } = require('../utils');
const Error = require('../configs/error');

const createVehicle = catchAsync(async (req, res) => {
  const { name, version, price, plate } = req.body;
  await VehicleService.createVehicle(name, version, price, plate);
  res.status(200).json(ResponseService.newSuccess());
});

const getVehicleById = catchAsync(async (req, res) => {
  const vehicle = await VehicleService.getVehicleById(req.params.id);
  if (!vehicle) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);
  res.status(200).json(ResponseService.newSuccess(vehicle));
});

const getAllVehicles = catchAsync(async (req, res) => {
  const vehicle = await VehicleService.getVehicle();
  if (!vehicle) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);
  res.json(vehicle);
});

const updateVehicleById = catchAsync(async (req, res) => {
  const vehicleUpdate = req.body;
  const vehicleId = req.params.id;
  const newVehicle = await VehicleService.updateVehicleById(vehicleUpdate, vehicleId);
  if (!newVehicle) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);
  res.status(200).json(ResponseService.newSuccess(newVehicle));
});

const deleteVehicleById = catchAsync(async (req, res) => {
  const vehicleDelete = req.params.id;
  const vehicleDeleted = await VehicleService.deleteVehicleById(vehicleDelete);
  if (!vehicleDeleted) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);
  res.status(200).json(ResponseService.newSuccess(vehicleDeleted));
});

const searchDeletedVehicleById = catchAsync(async (req, res) => {
  const vehicleId = req.params.id;
  const vehicleDeleted = await VehicleService.searchVehicleByIdDeleted(vehicleId);
  if (!vehicleDeleted) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);
  res.status(200).json(ResponseService.newSuccess(vehicleDeleted));
});

module.exports = {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicleById,
  deleteVehicleById,
  searchDeletedVehicleById,
};
