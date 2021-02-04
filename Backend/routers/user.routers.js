const router = require("express").Router();
const {userController,loginController} = require('../controllers')
const {asyncHandler} = require('../middlewares')

router.route('/all')
    .get(asyncHandler(userController.findAll))

router.route('/user/:id')
    .get(asyncHandler(userController.findUserForID))

router.route('/user')
    .get(asyncHandler(userController.findUserForUsername))    

router.route('/user')
    .post(asyncHandler(userController.createUser))       
    
router.route('/user/login')
    .post(asyncHandler(loginController.getTokenUser))       

module.exports = router;
