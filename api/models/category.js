const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({

    name: {

        type: String,
        required: [true, 'name_missing'],
        unique: true

    }

})

// static method for categories
schema.statics.categories = async function( search ) {
    
    let params = { }
    
    if( search ) params = { name: new RegExp( search, 'i' ) }
    const data = await this.find( params )

    return data

}

// static method for categories
schema.statics.edit = async function( category, name ) {
    
    const data = await this.findByIdAndUpdate({ '_id': category }, { name })

    return data

}

module.exports = mongoose.model('categorie', schema)