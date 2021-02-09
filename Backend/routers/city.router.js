const router = require("express").Router();
const { cityController } = require('../controllers')
const {asyncHandler} = require('../middlewares')

router.route('/all')
    .get(asyncHandler(cityController.findAll))

router.route('/city/:id')
    .get(asyncHandler(cityController.findUserForID))

module.exports = router;    