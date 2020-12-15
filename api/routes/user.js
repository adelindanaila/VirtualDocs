const { Router } = require('express')
const authorization = require('../authorization')
const controller = require('../controllers/user')

const router = Router( )

router.post('/user/signup', controller.signup)
router.post('/user/signin', controller.signin)

router.get('/user', authorization, controller.data)

module.exports = router