const { fs, contactsPath } = require('../../utils/path/pathContact')

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())

    return parseContacts
  } catch (err) {
    return err
  }
}

module.exports = {
  listContacts,
}
