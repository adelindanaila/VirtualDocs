const model = require('../models/document')

module.exports.documents = async ( request, response ) => {

    const { category, limit, page } = request.query
    

    try {
        
        const data = await model.documents( category, Number(limit), Number(page) )
        response.status(200).json( data )

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}

module.exports.add = async ( request, response ) => {

    console.log(request)
    response.status(200).json({ data: 'test' })

}