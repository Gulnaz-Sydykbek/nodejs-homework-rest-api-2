const { userLogout } = require('../../model/users')

const authLogout = async (req, res, next) => {
  try {
    const { id, token } = req.user
    const user = await userLogout(id, null)

    if (!user || token !== user.token) {
      return res
        .status(401)
        .type('application/json')
        .json({ message: 'Not authorized' })
    }

    return res.status(204).json({})
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authLogout,
}
