const {Router} = require('express')
const { reviewsControllers} = require('../controllers/Reviews.controllers')
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router()

router.post('/Reviews', authMiddleware, reviewsControllers.createReview)
router.get('/Reviews', reviewsControllers.getReviews)
router.delete("/Reviews/:id",authMiddleware, reviewsControllers.deleteReview)
router.patch('/Reviews/:id', authMiddleware, reviewsControllers.patchReview)

module.exports = router