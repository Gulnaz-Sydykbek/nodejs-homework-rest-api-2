const { connectMongo } = require('../../db/connection')
const ObjectId = require('mongodb').ObjectID

const deleteContact = async (req, res, next) => {
  try {
    const Contacts = await connectMongo()
    await Contacts.deleteOne({ _id: new ObjectId(req.params.contactId) })

    if (!req.params.contactId) {
      return res.status(404).json({ message: 'Not found' })
    }

    return res.status(200).json({ message: 'Contact deleted' })
  } catch (err) {
    next()
  }
}

module.exports = {
  deleteContact,
}
