const Vehicle = require('../../models/vehicle.model.js');
let softDelete = require('mongoosejs-soft-delete');
const registerValidator = require('../../utils/auth.validation.js');
const ResponseService = require('../response/response.service');
const { Error } = require('../../config');


const createVehicle = async(name, version, price,plate) =>{
    const{err} = registerValidator({name,version,price,plate});
    if(err) throw  res.status(400).json(ResponseService.new())
    const checkVehicleExists = await Vehicle.findOne({plate})
    if(checkVehicleExists) throw ResponseService.newError(Error.VehicleExitsError.errCode, Error.VehicleExitsError.errMessage);

    
    const newVehicle = new Vehicle({
        name,
        version,
        price,
        plate
    })
    return newVehicle.save();
};

const getVehicleById = async(id) => {
    const vehicle = await Vehicle.findOne({'_id': Object(id)})
    return vehicle;
};

const getVehicle = async() =>{
    const vehicles = await Vehicle.find({});
    return vehicles;
};

const updateVehicleById = async(vehicleInfo, vehicleId) => {
    const newInfoVehicle = await Vehicle.findByIdAndUpdate({'_id': Object(vehicleId)},{$set: vehicleInfo});
    return newInfoVehicle.save();
};

const deleteVehicleById = async(vehicleId) => {
    const deletedVehicle = await Vehicle.removeOne({'_id': Object(vehicleId)});
    return deletedVehicle;
};

const searchVehicleByIdDeleted = async(id) => {
    const deletedVehicle = await Vehicle.findByIdDeleted({'_id': Object(id)});
    return deletedVehicle;
};
    

module.exports = {createVehicle, getVehicle, getVehicleById, updateVehicleById, deleteVehicleById, searchVehicleByIdDeleted}