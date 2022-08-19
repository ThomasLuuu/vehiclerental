const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    images: [
      {
        cloudinaryUrl: String,
        cloudinaryPubId: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model('Post', postSchema);
module.exports = Post;

// rating
// Score total: 50(5) + 25(4) + 20(3) + 15(2) + 10(1) = 450
// Response total: 50 + 25 + 20 + 15 + 10 = 120
// 5-star score: 450 / 120 = 3.75, which rounds to 3.8 (your 5-star score)
