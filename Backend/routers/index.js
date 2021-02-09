const express = require('express');

const router = express.Router();
const user = require('./user.routers');
const city = require('./city.router');
  
router.use('/users', user);
router.use('/cities', city);

module.exports = router;