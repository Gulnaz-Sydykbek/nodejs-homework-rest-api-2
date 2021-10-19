const { fs, contactsPath } = require('./pathContact')

const getContactById = async (req, res, next) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())
    const [contact] = await parseContacts.filter(({ id }) => String(id) === String(req.params.contactId))

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
