const jwt = require('jsonwebtoken')

const userValidation = (req, res, next) => {
  try {
    const [tokenType, token] = req.headers['authorization'].split(' ')

    if (!token) {
      return 'please, provide a token'
    }

    const user = jwt.decode(token, process.env.JWT_SECRET)
    req.token = token
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = {
  userValidation
}
