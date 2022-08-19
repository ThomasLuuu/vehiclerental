const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const Role = new mongoose.model(
  'role',
  new mongoose.Schema({
    name: String,
  })
);

module.exports = Role;
