const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { User } = require('../../db/usersModel')

const registration = async (email, password) => {
  const user = new User({ email, password })

  await user.save()
}

const login = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
    return 'No user with email'
  }

  if (!await bcrypt.compare(password, user.password)) {
    return 'Wrong passord'
  }

  const token = jwt.sign({ _id: user._id, createdAt: user.createdAt }, process.env.JWT_SECRET)

  return token
}

module.exports = {
  registration,
  login,
}
