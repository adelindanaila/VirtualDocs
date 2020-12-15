const { Router } = require('express')
const controller = require('../controllers/category')

const router = Router( )

router.get('/categories', controller.categories)

module.exports = router