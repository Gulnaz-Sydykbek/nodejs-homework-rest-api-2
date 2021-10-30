const { Contacts } = require('../../db/contactsModel')

const addContact = async (name, email, phone, owner) => {
  try {
    const result = new Contacts({ name, email, phone, owner })
    await result.save()

    return result
  } catch (err) {
    return err
  }
}

module.exports = {
  addContact,
}
