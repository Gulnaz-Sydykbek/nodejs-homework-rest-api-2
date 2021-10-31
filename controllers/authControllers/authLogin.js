const { userLogin } = require('../../model/users')

const authLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const token = await userLogin(email, password)

    if (email === '' || password === '') {
      return res
        .status(400)
        .type('application/json')
        .json({ message: 'Missing required field' })
    }

    if (token === true) {
      return res
        .status(401)
        .json({ message: 'Email or password is wrong' })
    }

    return res
      .status(200)
      .json({ token, user: { email } })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  authLogin,
}
