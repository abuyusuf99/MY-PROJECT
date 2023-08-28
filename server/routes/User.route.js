const {Router}= require('express')
const {userControllers}= require('../controllers/User.controllers')

const router = Router()

router.post('/user', userControllers.createUser)
router.get('/user',  userControllers.getUser)
router.delete('/user/:id',userControllers.deleteUser)
router.patch('/user/:id',userControllers.patchUser)
router.post('/login', userControllers.login)

module.exports = router