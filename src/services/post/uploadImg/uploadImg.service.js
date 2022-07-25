/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const CloudinaryService = require('./cloudinary.service');

const uploadImges = async (files) => {
  let cloudinaryImges = [];

  for (const file of files) {
    const { path } = file;
    const cloudinaryImg = CloudinaryService.uploads(path, 'Images');
    cloudinaryImges.push(cloudinaryImg); // the array of Pending Promises
  }

  cloudinaryImges = await Promise.all(cloudinaryImges); // the array of resolved Promises

  // remove the images in the server source code
  for (const file of files) {
    const { path } = file;
    fs.unlinkSync(path);
  }

  return { cloudinaryImges };
};

module.exports = { uploadImges };
