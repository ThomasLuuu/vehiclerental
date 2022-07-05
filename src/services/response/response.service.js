const AppError = require('./AppError');
const Success = require('./Success');

const newError = (errCode, errMessage, statusCode = 400) => {
  return new AppError(errCode, errMessage, statusCode);
};
const newSucess = (respBody = {}, message = 'Successfully', code = 0, statusCode = 200) => {
  return new Success(respBody, message, code, statusCode);
};

module.exports = { newSucess, newError };
