const {Router} = require('express')
const { productControllers} = require('../controllers/Product.controllers')

router = Router()

router.post('/Products', productControllers.createProduct)
router.get('/Products', productControllers.getProducts)
router.delete("/Products/:id", productControllers.deleteProduct)
router.patch('/Products/:id', productControllers.patchProduct)


module.exports = router