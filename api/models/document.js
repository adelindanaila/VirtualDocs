const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')
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

        type: Schema.ObjectId

    },

    date: {

        type: Date,
        required: [true, 'date_missing'],
        default: Date.now

    }

})

// static method for documents
schema.statics.documents = async function( category, limit, page ) {
    
    const options = {

        limit: Number.isNaN(limit) ? 10 : limit,
        page: Number.isNaN(page) ? 1 : page

    }

    let query = { }
    if( category ) query.category = category

    const data = await this.paginate(query, options)

    return data

}

// paginate
schema.plugin(paginate)

module.exports = mongoose.model('document', schema)