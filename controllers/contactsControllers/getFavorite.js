const { updatePatchContact } = require('../../model/contacts')

const getFavorite = async (req, res, next) => {
  try {
    const { name, email, phone, favorite } = req.body
    const { _id } = req.user

    await updatePatchContact(req.params.contactId, _id, name, email, phone, favorite)

    if (!req.body) {
      return res.status(400).json({ message: 'Missing field favorites"' })
    }

    return res.status(200).json({ message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  getFavorite,
}
