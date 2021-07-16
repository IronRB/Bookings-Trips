const router = require("express").Router();
const { bookingController } = require('../controllers')
const {asyncHandler,protectedRoutes} = require('../middlewares')

router.route('/all')
    .get(asyncHandler(bookingController.findAll))

router.route('/booking/:id')
    .get(asyncHandler(bookingController.findUserForID))

router.route('/booking')
    .post(asyncHandler(bookingController.CreateBooking))    

module.exports = router;    