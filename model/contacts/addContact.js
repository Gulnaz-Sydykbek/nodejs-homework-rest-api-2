const { fs, contactsPath, shortid } = require('../../utils/path/pathContact')

const addContact = async (name, email, phone) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())

    const newContact = { id: shortid.generate(), name, email, phone }
    const contacts = [...parseContacts, newContact]

    await fs.writeFile(contactsPath, JSON.stringify(contacts))

    return newContact
  } catch (err) {
    return err
  }
}

module.exports = {
  addContact,
}
