const { Router } = require('express')
const controller = require('../controllers/user');

const router = Router( )

router.get('/test', controller.test)

module.exports = router