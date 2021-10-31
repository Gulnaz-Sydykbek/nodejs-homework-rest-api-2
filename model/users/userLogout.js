const { User } = require('../../db/userModel')

const userLogout = async (id, token) => {
  try {
    return await User.findByIdAndUpdate(id, { token })
  } catch (err) {
    return err
  }
}

module.exports = {
  userLogout,
}
