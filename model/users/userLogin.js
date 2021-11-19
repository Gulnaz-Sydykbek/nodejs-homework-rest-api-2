const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { User } = require('../../db/userModel')

const SECRET = process.env.JWT_SECRET

const userLogin = async (email, password) => {
  try {
    const user = await User.findOne({ email })

    if (!user) {
      return !user
    }

    if (!await bcrypt.compareSync(password, user.password)) {
      return !bcrypt.compareSync(password, user.password)
    }

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '7 days' })

    await User.updateOne({ _id: user.id }, { token })

    if (!user.verify) {
      return
    }

    return token
  } catch (err) {
    return err
  }
}

module.exports = {
  userLogin,
}
