const { updatePatchContact } = require('../../model/contacts')

const patchContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body
    const { id } = req.user

    await updatePatchContact(req.params.contactId, id, name, email, phone)

    if (!req.body) {
      return res.status(400).json({ message: 'Missing fields"' })
    }

    return res.status(200).json({ message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  patchContact,
}
