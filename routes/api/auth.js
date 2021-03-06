const express = require('express')
const router = express.Router()
const { checkAuth } = require('../../helpers/checkAuth')
const { authSignup, authLogin, authLogout, authCurrentToken, authUpdateSubscription, authVerify, authReverify } = require('../../controllers/authControllers')
const { avatarsControllers } = require('../../controllers/avatarsControllers/avatarsControllers')
const uploadMiddleware = require('../../middlewares/uploadMiddleware')

router.post('/signup', authSignup)
router.post('/login', authLogin)
router.post('/logout', checkAuth, authLogout)

router.get('/current', checkAuth, authCurrentToken)

router.patch('/', checkAuth, authUpdateSubscription)

router.patch('/avatars', checkAuth, uploadMiddleware.single('avatar'), avatarsControllers)

router.get('/verify/:verificationToken', authVerify)
router.post('/verify', authReverify)

module.exports = {
  authRouter: router,
}
