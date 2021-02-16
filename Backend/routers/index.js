const express = require('express');

const router = express.Router();
const user = require('./user.routers');
const city = require('./city.router');
const flight = require('./flight.router');
const booking = require('./booking.router');
  
router.use('/users', user);
router.use('/cities', city);
router.use('/flights', flight);
router.use('/bookings', booking);

module.exports = router;