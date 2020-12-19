const { Router } = require('express')
const controller = require('../controllers/category')
const admin_authorization = require('../authorizations/admin')

const router = Router( )

router.get('/categories', controller.categories)
router.post('/category/edit', admin_authorization, controller.edit)

module.exports = router