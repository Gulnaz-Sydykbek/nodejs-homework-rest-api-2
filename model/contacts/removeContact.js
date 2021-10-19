const { fs, contactsPath } = require('../../utils/path/pathContact')

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())

    const contact = await parseContacts.filter(({ id }) => String(id) !== String(contactId))

    await fs.writeFile(contactsPath, JSON.stringify(contact))
  } catch (err) {
    return err
  }
}

module.exports = {
  removeContact,
}
