const { fs, contactsPath } = require('../../utils/path/pathContact')

const updatePatchContact = async (contactId, name, email, phone) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())

    const newContact = parseContacts.map((contact) => {
      if (String(contact.id) === String(contactId)) {
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

    return newContact
  } catch (err) {
    return err
  }
}

module.exports = {
  updatePatchContact,
}
