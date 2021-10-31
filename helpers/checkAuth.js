const passport = require('passport')
require('../config/passport')

const checkAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    const [, token] = req.get('Authorization').split(' ')
    if (!user || error || token !== user.token) {
      return res
        .status(401)
        .type('application/json')
        .json({ message: 'Not authorized' })
    }
    req.user = user
    return next()
  })(req, res, next)
}

module.exports = {
  checkAuth
}
