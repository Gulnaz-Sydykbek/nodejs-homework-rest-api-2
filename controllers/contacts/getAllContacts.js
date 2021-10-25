const { listContacts } = require('../../model/contacts')

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await listContacts()

    return res.status(200).json({ contacts, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  getAllContacts,
}
