const { Router } = require('express')
const controller = require('../controllers/document')
const admin_authorization = require('../authorizations/admin')

const router = Router( )

router.get('/documents', controller.documents)
router.post('/document/add', admin_authorization, controller.add)

module.exports = router