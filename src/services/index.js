const ResponseService = require('./response/response.service');
const AuthService = require('./auth/auth.service');
const JwtService = require('./auth/jwt.service');
const MobileService = require('./mobile/mobile');
<<<<<<< HEAD
<<<<<<< HEAD
const UserService = require('./user/user');
const VehicleService = require('./vehicle/vehicle');
module.exports = { ResponseService, AuthService, MobileService, UserService, VehicleService };
=======
const PostService = require('./post/post.service');

module.exports = { ResponseService, AuthService, MobileService, JwtService, PostService };
>>>>>>> 1db470ef9aa542ce56b0e83d059e3a650404a580
=======
const PostService = require('./post/post.service');
const VehicleService = require('./vehicle/vehicle');

module.exports = { ResponseService, AuthService, MobileService, JwtService, PostService, VehicleService };
>>>>>>> beaedc0f8aa53dbd7b684b381a4f7e85bc15b523
