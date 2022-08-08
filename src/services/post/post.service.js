const UploadImgService = require('./uploadImg/uploadImg.service');
const VehicleService = require('../vehicle/vehicle.service');
const RatingService = require('../rating/rating.service');
const { Post } = require('../../models');

const createPost = async (files) => {
  return UploadImgService.uploadImges(files);
};

const getAllPost = async () => {
  const posts = await Post.find({});
  for (let post of posts) {
    const { vehicle } = await VehicleService.getVehicleByPostId(post._id);
    post = { ...post, vehicle };

    const { ratings } = await RatingService.getRatingByPostId(post._id);
    const numberOfRatings = await RatingService.convertRatingsToNumberOfRatings(ratings);
    const totalRating = await RatingService.calculateRatingBasedOnScaleOf5(numberOfRatings);

    post = { ...post, rating: totalRating };
  }

  return { posts };
};

const getPostsByUserId = async (userId) => {
  const posts = await Post.find({ postedBy: Object(userId) });
  return { posts};
};

module.exports = { createPost, getPostsByUserId, getAllPost };
