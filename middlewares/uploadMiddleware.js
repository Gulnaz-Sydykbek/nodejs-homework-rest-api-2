const multer = require('multer')
const path = require('path')

const FILE_DIR = path.join(__dirname, '../', 'tmp')

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

module.exports = uploadMiddleware
