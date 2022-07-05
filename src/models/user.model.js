const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    min: 6,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  codeActive: {
    type: String,
  },
  verify: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
