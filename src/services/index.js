const ResponseService = require('./response/response.service');
const AuthService = require('./auth/auth.service');
const JwtService = require('./auth/jwt.service');
const MobileService = require('./mobile/mobile');
<<<<<<< HEAD
const UserService = require('./user/user');
const VehicleService = require('./vehicle/vehicle');
module.exports = { ResponseService, AuthService, MobileService, UserService, VehicleService };
=======
const PostService = require('./post/post.service');

module.exports = { ResponseService, AuthService, MobileService, JwtService, PostService };
>>>>>>> 1db470ef9aa542ce56b0e83d059e3a650404a580
