const model = require('../models/document')
const fs = require('fs')

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

    const { file } = request
    const { input0, input1, input2 } = request.body

    try {

        await fs.renameSync(file.path, `${file.path}.pdf`)
        
        const data = await model.create({

            name: input0.trim( ),
            description: input2.trim( ),
            file: file.filename,
            category: input1

        })

        response.status(200).json( data )

    }

    catch (error) {
        
        response.status(400).json( error )

    }

}