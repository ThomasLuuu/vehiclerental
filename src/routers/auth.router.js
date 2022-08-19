const express = require('express');
const { AuthController } = require('../controllers');
const { verifyUser } = require('../middlewares');

const router = express.Router();

router.route('/genRefreshAndAccess').get(AuthController.genRefreshAndAccess);

router.route('/logout').get(verifyUser, AuthController.logout);

router.route('/register').post(AuthController.register);

router.route('/login').post(AuthController.login);

module.exports = router;
