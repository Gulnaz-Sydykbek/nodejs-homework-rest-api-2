const { fs, contactsPath, shortid } = require('./pathContact')

const addContact = async (req, res, next) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())
    const { name, email, phone } = req.body

    const newContact = { id: shortid.generate(), name, email, phone }
    const contacts = [...parseContacts, newContact]

    await fs.writeFile(contactsPath, JSON.stringify(contacts))

    return res.status(201).json({ message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  addContact,
}
