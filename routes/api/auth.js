const express = require('express')
const router = express.Router()
const { checkAuth } = require('../../helpers/checkAuth')
const { authSignup, authLogin, authLogout, authCurrentToken, authUpdateSubscription } = require('../../controllers/authControllers')
const { uploadControllers } = require('../../controllers/avatarsControllers/avatarsControllers')

router.post('/signup', authSignup)
router.post('/login', authLogin)
router.post('/logout', checkAuth, authLogout)

router.get('/current', checkAuth, authCurrentToken)

router.patch('/', checkAuth, authUpdateSubscription)

const multer = require('multer')
const path = require('path')

const FILE_DIR = path.join(__dirname, '../', '../', 'tmp')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR)
  },

  filename: (req, file, cb) => {
    const [filename, extension] = file.originalname.split('.')
    cb(null, `${filename}.${extension}`)
  }
})

const uploadMiddleware = multer({ storage })

router.patch('/avatars', checkAuth, uploadMiddleware.single('avatar'), uploadControllers)

module.exports = {
  authRouter: router,
}
