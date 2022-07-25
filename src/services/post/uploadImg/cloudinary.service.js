/* eslint-disable camelcase */
const cloudinary = require('cloudinary');
const ResponseService = require('../../response/response.service');
const { Error } = require('../../../config');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploads = async (tempFilePath, folder) => {
  const cloudinaryUploadResp = await cloudinary.v2.uploader.upload(
    tempFilePath,
    { folder, resource_type: 'auto' },
    (error) => {
      if (error) throw ResponseService.newError(Error.CloudinaryError.errCode, error.message);
    }
  );
  const { secure_url, public_id } = cloudinaryUploadResp;
  return { cloudinaryUrl: secure_url, cloudinaryPubId: public_id };
};

module.exports = { uploads };
