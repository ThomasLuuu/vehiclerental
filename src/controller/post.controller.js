const { ResponseService, PostService } = require('../services');
const { catchAsync } = require('../utils');

const createPost = catchAsync(async (req, res) => {
  const { files } = req;
  const data = await PostService.createPost(files);
  res.status(200).json(ResponseService.newSucess(data));
});

module.exports = { createPost };
