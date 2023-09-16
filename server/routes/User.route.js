const {Router}= require('express')
const {userControllers}= require('../controllers/User.controllers')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router()

router.post('/user', userControllers.createUser)
router.get('/user',authMiddleware,  userControllers.getUser)
router.get('/user/cart',authMiddleware,  userControllers.getProductCart)
router.delete('/user/:id',userControllers.deleteUser)
router.patch('/user/update', authMiddleware,userControllers.patchUser)
router.post('/login', userControllers.login)

module.exports = router