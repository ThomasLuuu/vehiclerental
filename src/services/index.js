const ResponseService = require('./response/response.service');
const AuthService = require('./auth/auth.service');
const JwtService = require('./auth/jwt.service');
const MobileService = require('./mobile/mobile');
const PostService = require('./post/post.service');
const VehicleService = require('./vehicle/vehicle.service');
const UserService = require('./user/user.service');
const RatingService = require('./rating/rating.service');

module.exports = {
  RatingService,
  ResponseService,
  AuthService,
  MobileService,
  JwtService,
  PostService,
  VehicleService,
  UserService,
};
