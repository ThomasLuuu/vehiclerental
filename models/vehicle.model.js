const mongoose = require('mongoose');
var app = require('express')();

const vehicleSchema = new mongoose.Schema({
    name: { 
        type: String},
    version:{
        type: String,
    },
    price: { 
        type: Float
    },
    rating: { 
        type: Number
    },
    });

const vehicle = mongoose.model('vehicle', vehicleSchema); 
module.exports = vehicle;