const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema(
  {
    forPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    ratedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    stars: Number,
  },
  {
    timestamps: true,
  }
);
const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;
