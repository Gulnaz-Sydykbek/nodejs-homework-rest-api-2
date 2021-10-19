const { fs, contactsPath } = require('./pathContact')

const listContacts = async (req, res, next) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseContacts = JSON.parse(data.toString())

    return res.status(200).json({ parseContacts, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  listContacts,
}
