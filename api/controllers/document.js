const model = require('../models/document')

module.exports.documents = async ( request, response ) => {

    const { category, limit } = request.query

    try {
        
        const data = await model.documents( category, Number(limit) )
        response.status(200).json( data )

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}