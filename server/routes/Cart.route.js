const {Router}= require('express')
const {cartControllers} = require('../controllers/Cart.controllers')

router = Router()

router.post('/Cart', cartControllers.createCart)
router.get('/Cart', cartControllers.getCart)
router.delete('/Cart/:id',cartControllers.deleteCart)
router.patch('/Cart/:id', cartControllers.patchCart)

module.exports = router