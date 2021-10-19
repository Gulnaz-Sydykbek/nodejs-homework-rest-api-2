const { fs, contactsPath } = require('../../utils/path/pathContact')

const updatePutContact = async (contactId, name, email, phone) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())

    const newContact = parseContacts.map((contact) => {
      if (String(contact.id) === String(contactId)) {
        contact.name = name
        contact.email = email
        contact.phone = phone
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
  updatePutContact,
}
