const Vehicle = require('../../models/vehicle.model.js');
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
}

const getVehicle = async() =>{
    const vehicles = await Vehicle.find({});
    console.log(vehicles)
    return vehicles;
}


    



module.exports = {createVehicle, getVehicle}