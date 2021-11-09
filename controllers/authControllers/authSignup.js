const { userSignup } = require('../../model/users')

const authSignup = async (req, res, next) => {
  try {
    const { email, password, subscription } = req.body
    const user = await userSignup(email, password, subscription)

    if (!user) {
      return res
        .status(400)
        .type('application/json')
        .json({ message: 'Missing required field' })
    }

    return res
      .status(201)
      .type('application/json')
      .json({
        user: {
          email: user.email,
          subscription: user.subscription,
        },
      })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authSignup,
}
