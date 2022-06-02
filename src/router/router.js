const {Router} = require('express')
const router = Router()
const controller = require('../controller/controller')

router.get('/',controller.index)
router.get('/women', controller.getByWomen)
router.get('/men', controller.getByMen)
router.get('/:id',controller.details)


module.exports = router;