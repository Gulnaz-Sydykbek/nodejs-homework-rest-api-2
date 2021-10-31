const express = require('express')
const router = express.Router()
const { checkAuth } = require('../../helpers/checkAuth')
const { authSignup, authLogin, authLogout, authCurrentToken, authUpdateSubscription } = require('../../controllers/authControllers')

router.post('/signup', authSignup)
router.post('/login', authLogin)
router.post('/logout', checkAuth, authLogout)

router.get('/current', checkAuth, authCurrentToken)

router.patch('/', checkAuth, authUpdateSubscription)

module.exports = {
  authRouter: router,
}
