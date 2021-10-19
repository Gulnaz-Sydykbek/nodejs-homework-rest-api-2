/* eslint-disable no-unused-vars */
const express = require('express')
const router = express.Router()
const { addContactsValidation, patchContactsValidation } = require('./validation')
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updatePutContact,
  updatePatchContact,
} = require('../../controllers/contacts')

router.get('/', listContacts)

router.get('/:contactId', getContactById)

router.post('/', addContactsValidation, addContact)

router.delete('/:contactId', removeContact)

router.put('/:contactId', addContactsValidation, updatePutContact)

router.patch('/:contactId', patchContactsValidation, updatePatchContact)

module.exports = router
