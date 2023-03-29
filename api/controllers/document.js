const model = require('../models/document')
const pdftk = require('node-pdftk')
const path = require('path')
const fs = require('fs')

require('dotenv').config({ path: '../../.env' })

module.exports.document = async (request, response) => {
  const { document } = request.query

  try {
    const data = await model.findOne({ _id: document })
    response.status(200).json(data)
  } catch (error) {
    response.status(400).json(error)
  }
}

module.exports.add = async (request, response) => {
  const { file } = request
  const { input0, input1, input2 } = request.body

  try {
    await fs.renameSync(file.path, `${file.path}.pdf`)

    const data = await model.create({
      name: input0.trim(),
      description: input2.trim(),
      file: file.filename,
      category: input1 === 'uncategorized' ? null : input1,
    })

    response.status(200).json(data)
  } catch (error) {
    response.status(400).json(error)
  }
}

module.exports.fill = async (request, response) => {
  const { file, fields } = request.body

  try {
    const data = await pdftk
      .input(path.join(__dirname, `../../${process.env.UPLOAD_FOLDER}/${file}.pdf`))
      .fillForm(JSON.parse(fields))
      .flatten()
      .output()
    response.status(200).send(data)
  } catch (error) {
    console.log(error)
    response.status(400).json(error)
  }
}

module.exports.documents = async (request, response) => {
  const { category, limit, page } = request.query

  try {
    const data = await model.documents(category, Number(limit), Number(page))
    response.status(200).json(data)
  } catch (error) {
    response.status(400).json(error)
  }
}

module.exports.search_documents = async (request, response) => {
  const { name, limit } = request.query

  try {
    let data = []

    if (name.length) {
      data = await model
        .find({
          name: new RegExp(name, 'i'),
        })
        .limit(Number(limit))
    }

    response.status(200).json(data)
  } catch (error) {
    response.status(400).json(error)
  }
}
