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
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  address: {
    type: String,
  },
  location: {
    type: String,
  },
  rating: {
    type: Number,
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

// rating
// Score total: 50(5) + 25(4) + 20(3) + 15(2) + 10(1) = 450
// Response total: 50 + 25 + 20 + 15 + 10 = 120
// 5-star score: 450 / 120 = 3.75, which rounds to 3.8 (your 5-star score)
