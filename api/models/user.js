const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({

    email: {

        type: String,
        required: [true, 'email_missing'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'email_invalid']

    },

    password: {

        type: String,
        required: [true, 'password_missing'],
        minlength: [6, 'password_length']

    }

})

// encrypt password before is sent to db
schema.pre('save', async function( next ) {

    const salt = await bcrypt.genSalt( )
    this.password = await bcrypt.hash( this.password, salt )
    next( )

})

// static method for login
schema.statics.login = async function( email, password ) {

    const user = await this.findOne({ email })
    if( user ) {

        const auth = await bcrypt.compare( password, user.password )
        if( auth ) return user

        throw Error('password_incorrect')

    }

    throw Error('email_incorrect')

}

// static method for user
schema.statics.user = async function( id ) {

    const data = await this.findById( id )
    if( data ) return data

    throw Error('user_notfounded')

}

// static method for users
schema.statics.users = async function( limit, page ) {

    const options = {

        limit: Number.isNaN(limit) ? 10 : limit,
        page: Number.isNaN(page) ? 1 : page,
        select: ['email']

    }

    const data = await this.paginate({ }, options)
    
    return data

}

// paginate
schema.plugin(paginate)

module.exports = mongoose.model('user', schema)