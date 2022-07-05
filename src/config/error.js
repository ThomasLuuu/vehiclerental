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
    errMessage: 'User not  found',
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

  // 400++ Error from Internal Server
  GenericError: {
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    errCode: 400,
    errMessage: 'Something wrong happened.',
  },
};

module.exports = Error;
