const user_model = require('../models/user')
const admin_model = require('../models/admin')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '../../.env' })

// error handlder
const get_errors = error => {
  let errors = { email: null, password: null }

  /* signin errors */

  // incorrect email
  if (error.message === 'email_incorrect') errors.email = 'email_incorrect'

  // incorrect password
  if (error.message === 'password_incorrect') errors.password = 'password_incorrect'

  /* signup errors */

  // email already exists
  if (error.code === 11000) {
    errors.email = 'email_exists'
    return errors
  }

  // model validator errors
  if (error.message.includes('user validation failed')) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }

  return errors
}

// json web token
const createToken = (id, admin) => {
  return jwt.sign({ id, admin }, process.env.JWT_SECRET, {
    expiresIn: Number(process.env.JWT_EXPIRE) * 24 * 60 * 60,
  })
}

module.exports.signup = async (request, response) => {
  const { email, password } = request.body

  try {
    let admin = false

    const user = await user_model.create({ email, password })

    try {
      const data = await admin_model.admin(user._id)
      admin = data._id
    } catch {
      admin = null
    }

    const token = createToken(user._id, admin)
    response.status(200).json({ user, token })
  } catch (error) {
    response.status(400).json({ errors: get_errors(error) })
  }
}

module.exports.signin = async (request, response) => {
  const { email, password } = request.body

  try {
    let admin = false

    const user = await user_model.login(email, password)

    try {
      const data = await admin_model.admin(user._id)
      admin = data._id
    } catch {
      admin = null
    }

    const token = createToken(user._id, admin)
    response.status(200).json({ user, token })
  } catch (error) {
    response.status(400).json({ errors: get_errors(error) })
  }
}

module.exports.user = async (request, response) => {
  try {
    const data = await user_model.user(request.user)
    response.status(200).json(data)
  } catch (error) {
    response.status(400).json(error)
  }
}

module.exports.users = async (request, response) => {
  const { limit, page } = request.query

  try {
    const data = await user_model.users(Number(limit), Number(page))
    response.status(200).json(data)
  } catch (error) {
    response.status(400).json(error)
  }
}
