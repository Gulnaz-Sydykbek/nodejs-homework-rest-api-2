const { Contacts } = require('../../db/contactsModel')

const updatePatchContact = async (contactId, name, email, phone, favorite) => {
  try {
    await Contacts.findByIdAndUpdate(contactId, { $set: { name, email, phone, favorite } })
  } catch (err) {
    return err
  }
}

module.exports = {
  updatePatchContact,
}
