/* eslint-disable prefer-template */
const dbPassword =
  'mongodb+srv://user:' + encodeURIComponent('12345') + '@cluster0.el0ke6e.mongodb.net/?retryWrites=true&w=majority';
module.exports = {
  mongoURI: dbPassword,
};
