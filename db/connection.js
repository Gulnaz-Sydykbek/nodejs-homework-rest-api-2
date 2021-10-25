require('dotenv').config()
const mongoose = require('mongoose')

const connectMongoose = async () => {
  try {
    console.log('Database connection successful')
    return mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  } catch (err) {
    process.exit(1)
  }
}

module.exports = {
  connectMongoose,
}
