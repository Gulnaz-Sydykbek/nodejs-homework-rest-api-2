const { updatePutContact } = require('../../model/contacts')

const putContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body

    const newContact = await updatePutContact(req.params.contactId, name, email, phone)

    if (!req.body) {
      return res.status(400).json({ message: 'Missing fields"' })
    }

    return res.status(200).json({ newContact, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  putContact,
}
