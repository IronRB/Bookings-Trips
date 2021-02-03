const router = require("express").Router();
const {userController} = require('../controllers')
const {asyncHandler} = require('../middlewares')

router.route('/all')
    .get(asyncHandler(userController.findAll))

router.route('/user/:id')
    .get(asyncHandler(userController.findUserForID))

router.route('/user')
    .get(asyncHandler(userController.findUserForUsername))    

router.route('/user')
    .post(asyncHandler(userController.createUser))        

module.exports = router;
