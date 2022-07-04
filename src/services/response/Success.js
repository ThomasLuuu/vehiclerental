class Success {
  constructor(respBody = {}, message = 'Successfully', code = 0, statusCode = 200) {
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
    this.respBody = respBody;
  }
}

module.exports = Success;
