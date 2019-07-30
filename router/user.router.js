var express = require('express');
var router = express.Router();

var userController = require('../controller/user.controller')


router.post('/login', userController.login)

module.exports = router;