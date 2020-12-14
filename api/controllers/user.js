const model = require('../models/user')

const get_errors = ( error ) => {

    let errors = { email: null, password: null }

    /* signin errors */

    // incorrect email
    if( error.message === 'email_incorrect' )
        errors.email = 'email_incorrect'

    // incorrect password
    if( error.message === 'password_incorrect' )
        errors.password = 'password_incorrect'

    /* signup errors */

    // email already exists
    if( error.code === 11000 ) {

        errors.email = 'email_exists'
        return errors

    }

    // model validator errors
    if( error.message.includes( 'user validation failed' ) ) {

        Object.values(error.errors).forEach(( { properties } ) => {

            errors[properties.path] = properties.message

        })

    }

    return errors

}

module.exports.signup = async (request, response) => {

    const { email, password } = request.body

    try {

        const user = await model.create({ email, password })
        response.status(201).json({ user })

    }

    catch (error) {

        response.status(400).json({ errors: get_errors(error) })

    }

}

module.exports.signin = async ( request, response ) => {

    const { email, password } = request.body
    
    try {

        const user = await model.login(email, password)
        response.status(200).json({ user })

    }

    catch (error) {

        response.status(400).json({ errors: get_errors(error) })

    }

}