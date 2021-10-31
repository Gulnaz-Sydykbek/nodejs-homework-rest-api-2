const { addContact } = require('../../model/contacts')

const postContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body
    const { id } = req.user

    const newContact = await addContact(name, email, phone, id)

    return res.status(201).json({ newContact, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  postContact,
}
