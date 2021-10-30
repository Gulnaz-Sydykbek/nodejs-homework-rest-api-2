const mongoose = require('mongoose')
const { Schema, model, SchemaTypes } = mongoose

const contactsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
    minLength: 3,
    maxLength: 35,
  },
  email: {
    type: String,
    unique: true,
    minLength: 3,
    maxLength: 35,
  },
  phone: {
    type: String,
    required: [true, 'Enter the phone number'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
  }
}, { versionKey: false, timestamps: true })

const Contacts = model('contacts', contactsSchema)

module.exports = {
  Contacts
}
