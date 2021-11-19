const { User } = require('../../db/userModel')
const { sendMail } = require('../../helpers/nodemailerConfig')

const userReverify = async (email) => {
  try {
    const user = await User.findOne({ email })

    if (!user) {
      return
    }

    if (!user.verify) {
      const data = {
        to: email,
        subject: 'Again: verification code',
        html: `<a href="http://localhost:3000/api/users/verify/${user.verifyToken}">Confirm registration</a> `
      }

      await sendMail(data)
    }

    return user
  } catch (err) {
    return err
  }
}

module.exports = {
  userReverify,
}
