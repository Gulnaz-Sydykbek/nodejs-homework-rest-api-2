/* eslint-disable no-unused-vars */
const express = require('express')
const router = express.Router()
const { addContactsValidation, patchContactsValidation } = require('./validation')
const {
  getAllContacts,
  getContactById,
  deleteContact,
  postContact,
  patchContact,
  getFavorite
} = require('../../controllers/contacts')

router.get('/', getAllContacts)

router.get('/:contactId', getContactById)

router.post('/', addContactsValidation, postContact)

router.delete('/:contactId', deleteContact)

router.patch('/:contactId', patchContactsValidation, patchContact)

router.patch('/:contactId/favorite', getFavorite)

module.exports = router
