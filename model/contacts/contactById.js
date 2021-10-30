const { Contacts } = require('../../db/contactsModel')

const contactById = async (contactId, owner) => {
  try {
    const result = await Contacts.findOne({ _id: contactId, owner })

    return result
  } catch (err) {
    return err
  }
}

module.exports = {
  contactById,
}
