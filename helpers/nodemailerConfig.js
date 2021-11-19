process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_PASSWORD, EMAIL_LOGIN } = process.env

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_LOGIN,
    pass: EMAIL_PASSWORD,
  }
})

const sendMail = async(data) => {
  try {
    const email = { ...data, from: '"Fred Foo 👻" <gulnaz.sydykbekova.94@mail.ru>' }
    await transporter.sendMail(email)
  } catch (err) {
    return false
  }
}

module.exports = {
  sendMail,
}
