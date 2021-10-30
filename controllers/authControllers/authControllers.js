const { registration, login } = require('../../model/users/authService')

const authRegistration = async (req, res) => {
  const { email, password } = req.body
  await registration(email, password)

  return res.json({ status: 'success' })
}

const authLogin = async (req, res) => {
  const { email, password } = req.body
  const token = await login(email, password)

  return res.json({ status: 'success', token })
}

module.exports = {
  authRegistration,
  authLogin
}
