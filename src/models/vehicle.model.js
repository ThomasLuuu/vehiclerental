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
  color: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ofPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});

vehicleSchema.plugin(softDelete);
const vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = vehicle;
