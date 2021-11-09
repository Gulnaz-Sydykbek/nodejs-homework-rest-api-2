const { User } = require('../../db/userModel')

const userSignup = async (email, password, subscription) => {
  try {
    const user = new User({ email, password, subscription })

    if (user) {
      await user.save()
    }

    return await user.save()
  } catch (err) {
    return err
  }
}

module.exports = {
  userSignup,
}
