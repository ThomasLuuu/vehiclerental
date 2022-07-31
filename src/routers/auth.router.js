const express = require('express');
const { AuthController } = require('../controller');
const { verifyToken } = require('../middlewares');

const router = express.Router();

router.route('/genRefreshAndAccess').get(AuthController.genRefreshAndAccess);

router.route('/logout').get(verifyToken, AuthController.logout);

router.route('/register').post(AuthController.register);

router.route('/login').post(AuthController.login);

module.exports = router;
