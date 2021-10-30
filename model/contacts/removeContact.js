const { Contacts } = require('../../db/contactsModel')

const removeContact = async (contactId, owner) => {
  try {
    await Contacts.findOneAndRemove({ _id: contactId, owner })
  } catch (err) {
    return err
  }
}

module.exports = {
  removeContact,
}
