const { Contacts } = require('../../db/contactsModel')

const listContacts = async () => {
  try {
    const result = await Contacts.find({})

    return result
  } catch (err) {
    return err
  }
}

module.exports = {
  listContacts,
}
