const { Router } = require('express')
const controller = require('../controllers/user');

const router = Router( )

router.post('/user/signup', controller.signup)
router.post('/user/signin', controller.signin)

module.exports = router