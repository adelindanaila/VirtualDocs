const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({

    name: {

        type: String,
        required: [true, 'name_missing'],
        unique: true

    }

})

schema.statics.categories = async function( search ) {
    
    let params = { }
    
    if( search ) params = { name: new RegExp( search, 'i' ) }
    const data = await this.find( params )

    return data

}

schema.statics.edit = async function( category, name ) {
    
    const data = await this.updateOne({

        _id: category
            
    }, {

        $set: {

            name

        }

    })

    return data

}

schema.statics.remove = async function( category ) {
    
    const data = await this.deleteOne({ _id: category })

    return data

}

module.exports = mongoose.model('categorie', schema)