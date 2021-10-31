const { authSignup } = require('./authSignup')
const { authLogin } = require('./authLogin')
const { authLogout } = require('./authLogout')
const { authCurrentToken } = require('./authCurrentToken')
const { authUpdateSubscription } = require('./authUpdateSubscription')

module.exports = {
  authSignup,
  authLogin,
  authLogout,
  authCurrentToken,
  authUpdateSubscription,
}
