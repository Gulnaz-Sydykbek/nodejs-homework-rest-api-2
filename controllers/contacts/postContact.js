const { connectMongo } = require('../../db/connection')

const postContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body

    const Contacts = await connectMongo()
    const newContact = await Contacts.insert({ name, email, phone })

    return res.status(201).json({ newContact, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  postContact,
}
