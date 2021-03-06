const { getAllContacts } = require('./getAllContacts')
const { getContactById } = require('./getContactById')
const { deleteContact } = require('./deleteContact')
const { postContact } = require('./postContact')
const { patchContact } = require('./patchContact')
const { getFavorite } = require('./getFavorite')

module.exports = {
  getAllContacts,
  getContactById,
  deleteContact,
  postContact,
  patchContact,
  getFavorite
}
