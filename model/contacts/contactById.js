const { Contacts } = require('../../db/contactsModel')

const contactById = async (contactId) => {
  try {
    const result = await Contacts.findById(contactId)

    return result
  } catch (err) {
    return err
  }
}

module.exports = {
  contactById,
}
