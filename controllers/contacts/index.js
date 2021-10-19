const { listContacts } = require('./listContacts')
const { getContactById } = require('./getContactById')
const { removeContact } = require('./removeContact')
const { addContact } = require('./addContact')
const { updatePutContact } = require('./updatePutContact')
const { updatePatchContact } = require('./updatePatchContact')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updatePutContact,
  updatePatchContact,
}
