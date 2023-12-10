const express = require('express');
const authController = require('../api/auth');
const router = express.Router();

router.post('/save-user', authController.saveUser);
router.post('/login', authController.saveUser);
module.exports = router;
