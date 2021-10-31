const express = require('express')
const router = express.Router()
const { addContactsValidation, patchContactsValidation } = require('../../middlewares/contactsValidation')
const { checkAuth } = require('../../helpers/checkAuth')
const {
  getAllContacts,
  getContactById,
  deleteContact,
  postContact,
  patchContact,
  getFavorite
} = require('../../controllers/contactsControllers')

router.use(checkAuth)

router.get('/', getAllContacts)
router.get('/:contactId', getContactById)
router.post('/', addContactsValidation, postContact)
router.delete('/:contactId', deleteContact)
router.patch('/:contactId', patchContactsValidation, patchContact)
router.patch('/:contactId/favorite', getFavorite)

module.exports = {
  contactsRouter: router,
}
