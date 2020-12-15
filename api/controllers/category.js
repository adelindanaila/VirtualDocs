const model = require('../models/category')

module.exports.categories = async ( request, response ) => {

    try {

        const data = await model.categories( )
        response.status(200).json( data )

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}