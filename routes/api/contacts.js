/* eslint-disable no-unused-vars */
const express = require('express')
const router = express.Router()
const { addContactsValidation, patchContactsValidation } = require('./validation')
const {
  getAllContacts,
  getContactById,
  deleteContact,
  postContact,
  putContact,
  patchContact,
} = require('../../controllers/contacts')

router.get('/', getAllContacts)

router.get('/:contactId', getContactById)

router.post('/', addContactsValidation, postContact)

router.delete('/:contactId', deleteContact)

router.put('/:contactId', addContactsValidation, putContact)

router.patch('/:contactId', patchContactsValidation, patchContact)

module.exports = router
