const { fs, contactsPath } = require('./pathContact')

const updatePatchContact = async (req, res, next) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())

    const { name, email, phone } = req.body

    const newContact = parseContacts.map((contact) => {
      if (String(contact.id) === String(req.params.contactId)) {
        if (name) {
          contact.name = name
        }
        if (email) {
          contact.email = email
        }
        if (phone) {
          contact.phone = phone
        }
      }

      return contact
    })

    await fs.writeFile(contactsPath, JSON.stringify(newContact))

    if (!req.body) {
      return res.status(400).json({ message: 'Missing fields"' })
    }

    return res.status(200).json({ message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  updatePatchContact,
}
