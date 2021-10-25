const { Contacts } = require('../../db/contactsModel')

const removeContact = async (contactId) => {
  try {
    await Contacts.findByIdAndRemove(contactId)
  } catch (err) {
    return err
  }
}

module.exports = {
  removeContact,
}
