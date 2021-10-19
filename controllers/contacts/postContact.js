const { addContact } = require('../../model/contacts')

const postContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body

    const newContact = await addContact(name, email, phone)

    return res.status(201).json({ newContact, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  postContact,
}
