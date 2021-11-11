const fs = require('fs').promises
const path = require('path')
const Jimp = require('jimp')
const { User } = require('../../db/userModel')

const FILE_DIR = path.join(__dirname, '../', '../', 'public', 'avatars')

const uploadControllers = async (req, res, next) => {
  const { id } = req.user
  const { path: tmpPath, originalname } = req.file
  const uploadPath = path.join(FILE_DIR, id, originalname)

  try {
    const file = await Jimp.read(tmpPath)
    await file.resize(250, 250).write(tmpPath)

    await fs.rename(tmpPath, uploadPath)

    const avatarURL = `/public/avatars/${id}/${originalname}`
    await User.findByIdAndUpdate(id, { avatarURL })

    if (!req.user) {
      return res
        .status(401)
        .type('application/json')
        .json({ message: 'Not authorized' })
    }

    return res
      .status(200)
      .type('application/json')
      .json({ avatarURL })
  } catch (err) {
    await fs.unlink(tmpPath)
    next(err)
  }
}

module.exports = {
  uploadControllers,
}
