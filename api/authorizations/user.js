const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '../.env' })

function authorization( request, response, next ) {

    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if( !token ) return response.sendStatus(401)

    jwt.verify( token, process.env.JWT_SECRET, ( error, decoded ) => {

        if( error ) return response.sendStatus(403)

        request.user = decoded.id
        next( )

    })

}

module.exports = authorization