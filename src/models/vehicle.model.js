const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  version: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
});

const vehicle = mongoose.model('vehicle', vehicleSchema);
module.exports = vehicle;
