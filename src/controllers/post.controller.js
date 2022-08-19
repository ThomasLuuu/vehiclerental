const { ResponseService, PostService } = require('../services');
const { catchAsync } = require('../utils');

const createPost = catchAsync(async (req, res) => {
  const { files } = req;
  const data = await PostService.createPost(files);
  res.status(200).json(ResponseService.newSuccess(data));
});

const getAllPosts = catchAsync(async (req, res) => {
  const  posts = await PostService.getAllPost();
  res.status(200).json(ResponseService.newSuccess(posts));
});

module.exports = { createPost, getAllPosts };
