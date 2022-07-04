const AppError = require('./AppError');
const Success = require('./Success');

const newError = (statusCode, errorCode, errorMessage) => {
  return new AppError(statusCode, errorCode, errorMessage);
};
const newSucess = (respBody = {}, message = 'Successfully', code = 0, statusCode = 200) => {
  return new Success(respBody, message, code, statusCode);
};

module.exports = { newSucess, newError };
