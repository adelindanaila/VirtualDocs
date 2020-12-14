const mongoose = require('mongoose')
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
        required: [true, 'password_missing']

    }

})

// encrypt password before is sent to db
schema.pre('save', async function(next) {

    const salt = await bcrypt.genSalt( )
    this.password = await bcrypt.hash(this.password, salt)
    next( )

})

// static method for login
schema.statics.login = async function(email, password) {

    const user = await this.findOne({ email })
    if( user ) {

        const auth = await bcrypt.compare(password, user.password)
        if( auth ) return user

        throw Error('password_incorrect')

    }

    throw Error('email_incorrect')

}

module.exports = mongoose.model('user', schema)