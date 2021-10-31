const authCurrentToken = async (req, res, next) => {
  try {
    const user = req.user

    if (!user) {
      return res
        .status(401)
        .type('application/json')
        .json({ message: 'Not authorized' })
    }

    return res
      .status(200)
      .type('application/json')
      .json({ user: { email: user.email, subscription: user.subscription } })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authCurrentToken,
}
