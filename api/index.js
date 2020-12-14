const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')

require('dotenv').config({ path: '../.env' })

const app = express( )
const port = process.env.API_PORT || 4000

// middleware
app.use(express.json( ))

// database connection
mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then((result) => {

    app.listen(port)
    console.log(`connection established on :${port}`)

}).catch((err) => console.log(err))

// routes
app.use(user)