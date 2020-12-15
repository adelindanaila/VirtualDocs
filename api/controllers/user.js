const model = require('../models/user')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '../../.env' })

// error handlder
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

// json web token
const createToken = ( id ) => {

    return jwt.sign({ id }, process.env.JWT_SECRET, {

        expiresIn: Number(process.env.JWT_EXPIRE) * 24 * 60 * 60
    
    })

}

module.exports.signup = async (request, response) => {

    const { email, password } = request.body

    try {

        const user = await model.create({ email, password })
        const token = createToken( user._id )

        response.status(200).json({ user, token })

    }

    catch (error) {

        response.status(400).json({ errors: get_errors(error) })

    }

}

module.exports.signin = async ( request, response ) => {

    const { email, password } = request.body
    
    try {

        const user = await model.login( email, password )
        const token = createToken( user._id )

        response.status(200).json({ user, token })

    }

    catch (error) {

        response.status(400).json({ errors: get_errors(error) })

    }

}

module.exports.data = async ( request, response ) => {

    const { token } = request.query

    try {

        jwt.verify( token, process.env.JWT_SECRET, async ( error, decoded ) => {

            if( error ) response.status(400).json( error )

            else {

                const data = await model.data( decoded.id )
                response.status(200).json( data )

            }
            
        })

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}