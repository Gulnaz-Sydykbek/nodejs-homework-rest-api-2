const { Contacts } = require('../../db/contactsModel')

const listContacts = async (owner) => {
  try {
    const result = await Contacts.find({ owner })

    return result
  } catch (err) {
    return err
  }
}

module.exports = {
  listContacts,
}
