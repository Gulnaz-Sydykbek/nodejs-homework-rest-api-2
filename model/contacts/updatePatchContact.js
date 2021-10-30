const { Contacts } = require('../../db/contactsModel')

const updatePatchContact = async (contactId, owner, name, email, phone, favorite) => {
  try {
    await Contacts.findOneAndUpdate({ _id: contactId, owner }, { $set: { name, email, phone, favorite } })
  } catch (err) {
    return err
  }
}

module.exports = {
  updatePatchContact,
}
