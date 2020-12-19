const model = require('../models/category')

module.exports.categories = async ( request, response ) => {

    const { search } = request.query

    try {

        const data = await model.categories( search )
        response.status(200).json( data )

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}

module.exports.edit = async ( request, response ) => {

    const { category, name } = request.body

    try {

        const data = await model.edit( category, name )
        response.status(200).json( data )

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}