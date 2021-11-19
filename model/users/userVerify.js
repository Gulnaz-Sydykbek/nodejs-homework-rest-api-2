const { User } = require('../../db/userModel')

const userVerify = async (verificationToken) => {
  try {
    const user = await User.findOne({ verifyToken: verificationToken })

    await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true })

    return user
  } catch (err) {
    return err
  }
}

module.exports = {
  userVerify,
}
