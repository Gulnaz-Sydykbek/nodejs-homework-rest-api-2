const { listContacts } = require('../../model/contacts')

const getAllContacts = async (req, res, next) => {
  try {
    const { _id } = req.user
    console.log('req.user', req.user)
    const contacts = await listContacts(_id)

    return res.status(200).json({ contacts, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  getAllContacts,
}
