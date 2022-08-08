const { Rating } = require('../../models');
const getRatingByPostId = async (postId) => {
  const ratings = await Rating.find({ forPost: Object(postId) });
  return { ratings };
};

// {5: 30, 4: 25, 3: 10, 2: 15, 1: 3}
const calculateRatingBasedOnScaleOf5 = async (numberOfRatings) => {
  let totalScore;
  let totalResponse;
  for (const rating in numberOfRatings) {
    totalScore += numberOfRatings[rating] * rating;
    totalResponse += numberOfRatings[rating];
  }
  const rating = totalScore / totalResponse;
  return rating;
};

const convertRatingsToNumberOfRatings = async (ratings) => {
  const numberOfRatings = ratings.reduce((newObj, curRating, curIndex) => {
    newObj.hasOwnProperty(curRating.stars) ? (newObj[curRating.stars] += 1) : (newObj[curRating.stars] = 1);
    return newObj;
  }, {});

  return numberOfRatings;
};

module.exports = { calculateRatingBasedOnScaleOf5, convertRatingsToNumberOfRatings, getRatingByPostId };
