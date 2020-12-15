const { Router } = require('express')
const user_authorization = require('../authorizations/user')
const admin_authorization = require('../authorizations/admin')
const controller = require('../controllers/user')

const router = Router( )

router.post('/user/signup', controller.signup)
router.post('/user/signin', controller.signin)

router.get('/user', user_authorization, controller.user)
router.get('/users', [user_authorization, admin_authorization], controller.users)

module.exports = router