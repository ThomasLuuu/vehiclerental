const UploadImgService = require('./uploadImg/uploadImg.service');

const createPost = async (files) => {
  return UploadImgService.uploadImges(files);
};

module.exports = { createPost };
