const { Vehicle } = require('../../models');
const { registerValidator } = require('../../utils');
const ResponseService = require('../response/response.service');
const { Error } = require('../../configs');

const createVehicle = async (name, version, price, plate) => {
  const { err } = registerValidator({ name, version, price, plate });
  if (err) throw ResponseService.newError(Error.RegisterValidationErr.errCode, err.message);
  const checkVehicleExists = await Vehicle.findOne({ plate });
  if (checkVehicleExists)
    throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);

  const newVehicle = new Vehicle({
    name,
    version,
    price,
    plate,
  });
  return newVehicle.save();
};

const getVehicleById = async (id) => {
  const vehicle = await Vehicle.findOne({ _id: Object(id) });
  return { vehicle };
};

const getVehicle = async () => {
  const vehicles = await Vehicle.find({});
  return { vehicles };
};

const getVehicleByPostId = async (postId) => {
  const vehicle = await Vehicle.findOne({ ofPost: Object(postId) });
  return { vehicle };
};

const updateVehicleById = async (vehicleInfo, vehicleId) => {
  const newInfoVehicle = await Vehicle.findByIdAndUpdate({ _id: Object(vehicleId) }, { $set: vehicleInfo });
  return newInfoVehicle.save();
};

const deleteVehicleById = async (vehicleId) => {
  const deletedVehicle = await Vehicle.removeOne({ _id: Object(vehicleId) });
  return { deletedVehicle };
};

const searchVehicleByIdDeleted = async (id) => {
  const deletedVehicle = await Vehicle.findByIdDeleted({ _id: Object(id) });
  return { deletedVehicle };
};

module.exports = {
  createVehicle,
  getVehicle,
  getVehicleById,
  getVehicleByPostId,
  updateVehicleById,
  deleteVehicleById,
  searchVehicleByIdDeleted,
};
