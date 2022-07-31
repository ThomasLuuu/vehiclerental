const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { registerValidator } = require('../../utils');
const ResponseService = require('../response/response.service');
const { Error } = require('../../config');

const register = async (username, email, password) => {
  const { err } = registerValidator({ username, email, password });

  if (err) throw ResponseService.newError(Error.RegisterValidationErr.errCode, err.details[0].message);

  const checkEmailExist = await User.findOne({ email });

  if (checkEmailExist) throw ResponseService.newError(Error.EmailExists.errCode, Error.EmailExists.errMessage);


  const newUser = new User({
    username,
    email,
    password,
  });

  bcrypt.genSalt(10, (_err, salt) => {
    bcrypt.hash(newUser.password, salt, (__err, hash) => {
      console.log(newUser.password);
      if (__err) throw ResponseService.newError(Error.HashPasswordBCrypt.errCode, err.message);
      newUser.password = hash;
      return newUser.save();
    });
  });
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) throw ResponseService.newError(Error.PasswordInvalid.errCode, Error.PasswordInvalid.errMessage);

  const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 * 20 });
  const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });

  return { accessToken, refreshToken };
};

const genRefreshAndAccess = async (token, secret) => {
  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      throw ResponseService.newError(Error.TokenInvalid.errCode, err.message);
    }

    const { userId } = decoded;

    const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 * 20 });
    const newRefreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });

    return { accessToken, newRefreshToken };
  });
};

module.exports = { register, login, genRefreshAndAccess };
