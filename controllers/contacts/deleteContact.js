const { removeContact } = require('../../model/contacts')

const deleteContact = async (req, res, next) => {
  try {
    await removeContact(req.params.contactId)

    if (!req.params.contactId) {
      return res.status(404).json({ message: 'Not found' })
    }

    return res.status(200).json({ message: 'Contact deleted' })
  } catch (err) {
    next()
  }
}

module.exports = {
  deleteContact,
}
