const { connectMongo } = require('../../db/connection')
const ObjectId = require('mongodb').ObjectID

const patchContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body

    const Contacts = await connectMongo()
    const newContact = await Contacts.updateOne({ _id: new ObjectId(req.params.contactId) }, { $set: { name, email, phone } })

    if (!req.body) {
      return res.status(400).json({ message: 'Missing fields"' })
    }

    return res.status(200).json({ newContact, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  patchContact,
}
