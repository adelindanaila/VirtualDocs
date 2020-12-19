const { Router } = require('express')
const controller = require('../controllers/category')
const admin_authorization = require('../authorizations/admin')

const router = Router( )

router.get('/categories', controller.categories)
router.post('/category/edit', admin_authorization, controller.edit)
router.post('/category/remove', admin_authorization, controller.remove)
router.post('/category/add', admin_authorization, controller.add)

module.exports = router