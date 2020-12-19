const category_model = require('../models/category')
const document_model = require('../models/document')

module.exports.categories = async ( request, response ) => {

    const { search } = request.query

    try {

        const data = await category_model.categories( search )
        response.status(200).json( data )

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}

module.exports.edit = async ( request, response ) => {

    const { category, name } = request.body

    try {

        const data = await category_model.edit( category, name )
        response.status(200).json( data )

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}

module.exports.remove = async ( request, response ) => {

    const { category } = request.body

    try {

        await document_model.updateMany({

            category
                
        }, {
    
            $set: {
    
                category: null
    
            }
    
        })

        const data = await category_model.remove( category )
        response.status(200).json( data )

    }

    catch (error) {
        
        console.log(error)
        response.status(400).json( error )

    }

}