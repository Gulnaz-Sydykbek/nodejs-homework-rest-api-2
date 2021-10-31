const { userUpdateSubscription } = require('../../model/users')

const authUpdateSubscription = async (req, res, next) => {
  try {
    const { id, email } = req.user

    const { subscription } = await userUpdateSubscription(
      id,
      req.body.subscription
    )

    if (!subscription) {
      return res
        .status(400)
        .json({ message: 'Please try again, your subscription did not update' })
    }

    return res
      .status(200)
      .json({ user: { email: email, subscription } })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authUpdateSubscription,
}
