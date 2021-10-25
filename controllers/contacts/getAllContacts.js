const { connectMongo } = require('../../db/connection')

const getAllContacts = async (req, res, next) => {
  try {
    const Contacts = await connectMongo()
    const contacts = await Contacts.find({}).toArray()
    console.log(contacts)
    return res.status(200).json({ contacts, message: 'Success' })
  } catch (err) {
    next()
  }
}

module.exports = {
  getAllContacts,
}
