const fs = require('fs').promises
const path = require('path')
const { addContact } = require('../../model/contacts')

const FILE_DIR = path.join(__dirname, '../', '../', 'public', 'avatars')

const postContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body
    const { id } = req.user

    const newContact = await addContact(name, email, phone, id)

    res.status(201).json({ newContact, message: 'Success' })

    const dirPath = path.join(FILE_DIR, id)
    await fs.mkdir(dirPath)
  } catch (err) {
    next()
  }
}

module.exports = {
  postContact,
}
