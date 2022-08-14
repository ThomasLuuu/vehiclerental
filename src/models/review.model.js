const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    inPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: String,
  },
  {
    timestamps: true,
  }
);
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
