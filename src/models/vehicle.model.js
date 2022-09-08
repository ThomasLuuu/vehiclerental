const mongoose = require('mongoose');
const softDelete = require('mongoosejs-soft-delete');

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
});

vehicleSchema.plugin(softDelete);
const vehicle = mongoose.model('vehicle', vehicleSchema);
module.exports = vehicle;
