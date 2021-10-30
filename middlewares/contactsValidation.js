/* eslint-disable no-unused-vars */
const Joi = require('joi')

module.exports = {
  addContactsValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().min(3).max(30).required(),
      phone: Joi.string().min(5).max(30).required(),
    })

    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details })
    }

    next()
  },

  patchContactsValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).optional(),
      email: Joi.string().min(3).max(30).optional(),
      phone: Joi.string().min(5).max(30).optional(),
    })

    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details })
    }

    next()
  }
}
