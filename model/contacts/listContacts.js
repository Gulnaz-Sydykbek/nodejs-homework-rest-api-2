const { Contacts } = require('../../db/contactsModel')

const listContacts = async (owner, { page, limit, favorite }) => {
  try {
    const result = await Contacts.paginate({ owner, ...(favorite && { favorite }) }, {
      page,
      limit,
      favorite,
      populate: {
        path: 'owner',
        select: 'subscription',
      },
    })

    const { docs: contacts, totalDocs, totalPages } = result

    return {
      contacts,
      limit,
      page,
      total: parseInt(totalDocs),
      totalPages: parseInt(totalPages),
    }
  } catch (err) {
    return err
  }
}

module.exports = {
  listContacts,
}
