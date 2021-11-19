const { userVerify } = require('../../model/users')

const authVerify = async (req, res, next) => {
  try {
    const { verificationToken } = req.params
    const user = await userVerify(verificationToken)

    if (!user) {
      return res
        .status(404)
        .json({ message: 'User not found' })
    }

    return res
      .status(200)
      .json({ message: 'Verification successful' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authVerify,
}
