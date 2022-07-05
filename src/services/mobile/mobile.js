require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const { User } = require('../../models');
const ResponseService = require('../response/response.service');
const { Error } = require('../../config');

const sendCode = async (userId, phone) => {
  const codeVerify = (Math.random() + 1).toString(36).substring(7);
  console.log(userId);
  if (phone.length < 11 || phone.length > 13) {
    throw ResponseService.newError(Error.PhoneFormattedError.errCode, Error.PhoneFormattedError.errMessage);
  } else {
    client.messages
      .create({
        body: `This is verification code ${codeVerify}, don't share it with others.`,
        from: '+18599045904',
        to: `${phone}`,
      })
      .then((message) => console.log(message.sid))
      .catch((err) => {
        throw ResponseService.newError(Error.SendCodeTwilioError.errCode, err.message);
      });
  }
  const user = await User.findOneAndUpdate(
    { _id: userId },
    { $set: { codeActive: codeVerify } },
    { returnDocument: 'after' }
  );
  return user;
};

const verify = async (userId, code) => {
  const user = await User.findById(userId);
  if (!user) {
    throw ResponseService.newError(Error.UserNotFound.errCode, Error.UserNotFound.errMessage);
  }

  if (user.codeActive !== code) {
    throw ResponseService.newError(Error.PhoneCodeVerificationError.errCode, Error.PhoneCodeVerificationError.errMessage);
  }

  await User.findByIdAndUpdate({ _id: userId }, { verify: true });
};

// router.post('/verify/:id/:code', function (req, res) {
//   User.findById(req.params.id, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else if ((result = req.params.code)) {
//       User.findByIdAndUpdate({ _id: req.params.id }, { verify: true }, function (err, result) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send(result);
//         }
//       });
//     } else {
//       res.send('Wrong code activate');
//     }
//   }).select({ _id: 0, codeActive: 1 });
// });

module.exports = { sendCode, verify };
