const { Router } = require('express')
const controller = require('../controllers/document')

const router = Router( )

router.get('/documents', controller.documents)

module.exports = router