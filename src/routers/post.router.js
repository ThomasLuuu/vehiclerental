const express = require('express');
const { PostController } = require('../controllers');
const fileHandler = require('../middlewares/multer');
const { verifyUser } = require('../middlewares');

const router = express.Router();

router.route('/uploadImages').post(verifyUser, fileHandler.array('image'), PostController.createPost);
router.route('/getAllPosts').get(verifyUser, PostController.getAllPosts);

module.exports = router;
