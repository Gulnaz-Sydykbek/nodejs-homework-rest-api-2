const { removeContact } = require('../../model/contacts')

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.user

    await removeContact(req.params.contactId, id)

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
