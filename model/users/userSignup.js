const { User } = require('../../db/userModel')
const { v4 } = require('uuid')
const { sendMail } = require('../../helpers/nodemailerConfig')

const userSignup = async (email, password, subscription) => {
  try {
    const user = new User({ email, password, subscription, verifyToken: v4() })

    const data = {
      to: email,
      subject: 'Verification code',
      html: `<a href="http://localhost:3000/api/users/verify/${user.verifyToken}">Confirm registration</a> `
    }

    await sendMail(data)

    if (user) {
      await user.save()
    }

    return user
  } catch (err) {
    return err
  }
}

module.exports = {
  userSignup,
}
