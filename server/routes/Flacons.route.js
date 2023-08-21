const {Router}= require('express')
const {flaconsControllers} = require('../controllers/Flacons.controllers')

router = Router()

router.post('/Flacons', flaconsControllers.createFlacons)
router.get('/Flacons', flaconsControllers.getFlacons)
router.delete('/Flacons/:id',flaconsControllers.deleteFlacons)
router.patch('/Flacons/:id', flaconsControllers.patchFlacons)

module.exports = router