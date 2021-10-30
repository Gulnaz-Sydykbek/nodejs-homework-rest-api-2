const { contactById } = require('../../model/contacts')

const getContactById = async (req, res, next) => {
  try {
    const { _id } = req.user
    const contact = await contactById(req.params.contactId, _id)

    if (!contact) {
      return res.status(404).json({ message: 'Not found' })
    }

    return res.status(200).json({ contact, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  getContactById,
}
