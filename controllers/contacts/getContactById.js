const { connectMongo } = require('../../db/connection')
const ObjectId = require('mongodb').ObjectID

const getContactById = async (req, res, next) => {
  try {
    const Contacts = await connectMongo()
    const contact = await Contacts.findOne({ _id: new ObjectId(req.params.contactId) })

    if (!contact) {
      return res.status(404).json({ message: 'Not found' })
    }

    return res.status(200).json({ contact, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  getContactById,
}
