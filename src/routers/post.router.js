const express = require('express');
const { PostController } = require('../controller');
const upload = require('../services/post/uploadImg/multer');
const { verifyUser } = require('../middlewares');

const router = express.Router();

router.route('/uploadImages').post(upload.array('image'), PostController.createPost);

module.exports = router;
