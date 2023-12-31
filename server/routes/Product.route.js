const {Router} = require('express')
const { productControllers} = require('../controllers/Product.controllers')
const authMiddleware = require('../middlewares/auth.middleware')

router = Router()

router.post('/Products', productControllers.createProduct)
router.get('/Products', productControllers.getProducts)
router.delete("/Products/:id", productControllers.deleteProduct)
router.patch('/Products/:id', productControllers.patchProduct)
router.get('/Products/:id', productControllers.getOneProduct)


module.exports = router