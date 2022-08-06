const httpStatus = require('http-status');

const Error = {
  // 100++ Error from info of the client
  UrlNotFound: {
    errCode: 100,
    errMessage: 'Request URL not found',
  },

  UserNameInvalid: {
    errCode: 101,
    errMessage: 'Username is invalid',
  },
  PasswordInvalid: {
    errCode: 102,
    errMessage: 'Password is invalid',
  },
  UserNotFound: {
    errCode: 103,
    errMessage: 'Email or Password invalid',
  },
  RegisterValidationErr: {
    errCode: 104,
  },
  EmailExists: {
    errCode: 105,
    errMessage: 'Email already exists',
  },
  PhoneFormattedError: {
    errCode: 106,
    errMessage: 'Phone format wrong',
  },
  PhoneCodeVerificationError: {
    errCode: 107,
    errMessage: 'Phone code wrong',
  },
  PhoneEmpty: {
    errCode: 108,
    errMessage: 'Phone empty',
  },
  AuthHeaderEmpty: {
    errCode: 109,
    errMessage: 'Authorization header empty',
  },
  AuthHeaderInvalid: {
    errCode: 110,
    errMessage: 'Authorization header invalid',
  },

  // 200++ Error from Db
  CastError: {
    errCode: 201,
    errMessage: 'Cast field error',
  },
  DuplicateFieldError: {
    errCode: 202,
    errMessage: 'Duplicate field error',
  },

  // 300++ Error from Third Party
  HashPasswordBCrypt: {
    errCode: 300,
  },
  TokenNotCreated: {
    errCode: 301,
    errMessage: 'Token undefined',
  },
  SendCodeTwilioError: {
    errCode: 302,
  },
  TokenMissing: {
    errCode: 303,
    errMessage: 'Token missing',
  },
  TokenInvalid: {
    errCode: 304,
  },
  SecretMissing: {
    errCode: 305,
    errMessage: 'Token secret missing',
  },
  CloudinaryError: {
    errCode: 306,
  },
  // 400++ Error from Internal Server
  GenericError: {
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    errCode: 400,
    errMessage: 'Something wrong happened.',
  },
  VehicleExitsError:{
    errCode: 344,
    errMessage:'This vehicle was already in the service'
  },
  VehicleNotExitsError:{
    errCode: 345,
    errMessage:'This vehicle is not in the service'
  }
};

module.exports = Error;
