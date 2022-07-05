const express = require('express');
const { MobileController } = require('../controller');

const router = express.Router();

router.route('/sendCode/:id').post(MobileController.sendCode);

router.route('/verify/:id/:code').post(MobileController.verify);

module.exports = router;
