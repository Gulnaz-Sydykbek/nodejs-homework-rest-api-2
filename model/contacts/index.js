const { listContacts } = require('./listContacts')
const { contactById } = require('./contactById')
const { addContact } = require('./addContact')
const { removeContact } = require('./removeContact')
const { updatePatchContact } = require('./updatePatchContact')

module.exports = {
  listContacts,
  contactById,
  addContact,
  removeContact,
  updatePatchContact,
}
