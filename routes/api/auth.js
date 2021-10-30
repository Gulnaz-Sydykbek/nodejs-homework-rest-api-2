const express = require('express')
const router = express.Router()
const { authRegistration, authLogin } = require('../../controllers/authControllers/authControllers')

router.post('/signup', authRegistration)

router.post('/login', authLogin)

module.exports = {
  authRouter: router,
}
