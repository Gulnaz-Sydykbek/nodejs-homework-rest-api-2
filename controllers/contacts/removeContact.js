const { fs, contactsPath } = require('./pathContact')

const removeContact = async (req, res, next) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())

    const contact = await parseContacts.filter(({ id }) => String(id) !== String(req.params.contactId))

    await fs.writeFile(contactsPath, JSON.stringify(contact))

    if (!req.params.contactId) {
      return res.status(404).json({ message: 'Not found' })
    }

    return res.status(200).json({ message: 'Contact deleted' })
  } catch (err) {
    next()
  }
}

module.exports = {
  removeContact,
}
