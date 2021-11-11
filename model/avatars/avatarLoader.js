const { User } = require('../../db/userModel')

const avatarLoader = async (id, avatarURL) => {
  try {
    await User.findByIdAndUpdate(id, { avatarURL })
  } catch (err) {
    return err
  }
}

module.exports = {
  avatarLoader,
}
