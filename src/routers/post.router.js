const express = require('express');
const { PostController } = require('../controller');
const fileHandler = require('../middlewares/multer');
const { verifyUser } = require('../middlewares');

const router = express.Router();

router.route('/uploadImages').post(verifyUser, fileHandler.array('image'), PostController.createPost);

module.exports = router;
