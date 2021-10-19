const { listContacts } = require('./listContacts')
const { contactById } = require('./contactById')
const { addContact } = require('./addContact')
const { removeContact } = require('./removeContact')
const { updatePutContact } = require('./updatePutContact')
const { updatePatchContact } = require('./updatePatchContact')

module.exports = {
  listContacts,
  contactById,
  addContact,
  removeContact,
  updatePutContact,
  updatePatchContact,
}
