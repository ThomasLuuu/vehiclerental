const httpStatus = require('http-status');

const Error = {
  // 100++ Error from info of the client
  UrlNotFound: {
    statusCode: httpStatus.BAD_REQUEST,
    errorCode: 100,
    message: 'Request URL not found',
  },

  UserNameInvalid: {
    statusCode: httpStatus.BAD_REQUEST,
    errorCode: 101,
    message: 'Username is invalid',
  },
  PasswordInvalid: {
    statusCode: httpStatus.BAD_REQUEST,
    errorCode: 102,
    message: 'Password is invalid',
  },
  UserNotFound: {
    statusCode: httpStatus.BAD_REQUEST,
    errorCode: 103,
    message: 'User not  found',
  },

  // 200++ Error from Db
  CastError: {
    statusCode: httpStatus.BAD_REQUEST,
    errorCode: 201,
    message: 'Cast field error',
  },
  DuplicateFieldError: {
    statusCode: httpStatus.BAD_REQUEST,
    errorCode: 202,
    message: 'Duplicate field error',
  },

  // 300++ Error from Third Party

  // 400++ Error from Internal Server
  GenericError: {
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    errorCode: 400,
    message: 'Something wrong happened.',
  },
};

module.exports = Error;
