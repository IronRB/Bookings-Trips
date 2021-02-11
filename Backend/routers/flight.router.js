const router = require("express").Router();
const { flightController } = require('../controllers')
const {asyncHandler} = require('../middlewares')

router.route('/all')
    .get(asyncHandler(flightController.findAll))

router.route('/flight/:id')
    .get(asyncHandler(flightController.findUserForID))

module.exports = router;    