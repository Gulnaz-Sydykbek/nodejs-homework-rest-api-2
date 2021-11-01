const { listContacts } = require('../../model/contacts')

const getAllContacts = async (req, res, next) => {
  try {
    const { id } = req.user
    let { page = 1, limit = 5 } = req.query

    limit = parseInt(limit) > 20 ? 20 : parseInt(limit)
    page = parseInt(page)

    const contacts = await listContacts(id, { page, limit })

    return res.status(200).json({ contacts, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  getAllContacts,
}
