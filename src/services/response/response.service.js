const AppError = require('./AppError');
const Success = require('./Success');

const newError = (errCode, errMessage, statusCode = 400) => {
  return new AppError(errCode, errMessage, statusCode);
};
const newSuccess = (data = {}, message = 'Successfully', code = 0, statusCode = 200) => {
  return new Success(data, message, code, statusCode);
};

module.exports = { newSuccess, newError };
