const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({

    name: {

        type: String,
        required: [true, 'name_missing']

    },

    description: {

        type: String,
        required: [true, 'description_missing']

    },

    file: {

        type: String,
        required: [true, 'file_missing']

    },

    category: {

        type: Schema.ObjectId,
        required: [true, 'file_missing']

    },

    date: {

        type: Date,
        required: [true, 'date_missing'],
        default: Date.now

    }

})

// static method for documents
schema.statics.documents = async function( category, limit ) {
    
    let params = { }

    if( category ) params = { category }
    const data = await this.find( params ).limit(limit)

    return data

}

module.exports = mongoose.model('document', schema)