const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  plate:{
    type:String,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
  },
});

const vehicle = mongoose.model('vehicle', vehicleSchema);
module.exports = vehicle;
