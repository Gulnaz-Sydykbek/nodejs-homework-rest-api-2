const fs = require('fs').promises
const path = require('path')
const shortid = require('shortid')

const contactsPath = path.join(__dirname, '..', '..', 'model', 'contacts.json')

module.exports = {
  fs,
  contactsPath,
  shortid,
}
