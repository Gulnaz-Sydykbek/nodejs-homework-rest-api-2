const { userReverify } = require('../../model/users')

const authReverify = async (req, res, next) => {
  try {
    const { email } = req.body

    const user = await userReverify(email)

    if (!user) {
      return res
        .status(400)
        .type('application/json')
        .json({ message: 'Missing required field email' })
    }

    if (user.verify) {
      return res
        .status(400)
        .type('application/json')
        .json({ message: 'Verification has already been passed' })
    }

    return res
      .status(200)
      .type('application/json')
      .json({ message: 'Verification email sent' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authReverify,
}
