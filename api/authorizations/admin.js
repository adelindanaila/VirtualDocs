const jwt = require('jsonwebtoken')
const model = require('../models/admin')

require('dotenv').config({ path: '../.env' })

async function admin_authorization( request, response, next ) {

    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if( !token ) return response.sendStatus(401)

    jwt.verify( token, process.env.JWT_SECRET, async ( error, decoded ) => {

        if( error ) return response.sendStatus(403)

        try {

            await model.admin( decoded.id )
            next( )

        }

        catch {

            return response.sendStatus(403)

        }
        
    })

}

module.exports = admin_authorization