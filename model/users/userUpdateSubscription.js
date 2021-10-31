const { User } = require('../../db/userModel')

const userUpdateSubscription = async (id, subscription) => {
  try {
    return await User.findByIdAndUpdate(
      { _id: id },
      { subscription },
      { new: true }
    )
  } catch (err) {
    return err
  }
}

module.exports = {
  userUpdateSubscription,
}
