const app = require('../app')
require('dotenv').config()

const { connectMongoose } = require('../db/connection')

const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectMongoose()

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch (err) {
    return `Failed, ${err.message}`
  }
}

start()
