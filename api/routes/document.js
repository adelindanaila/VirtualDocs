const { Router } = require('express')
const multer = require('multer')
const controller = require('../controllers/document')
const admin_authorization = require('../authorizations/admin')

require('dotenv').config({ path: '../../.env' })

const router = Router()
const upload = multer({
  dest: `../${process.env.UPLOAD_FOLDER}/`,
  limits: {
    fileSize: Number(process.env.UPLOAD_FILESIZE_LIMIT) * 1000000,
  },

  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'application/pdf') return cb(new Error('Invalid file format'))

    cb(null, true)
  },
})

router.get('/document', controller.document)
router.post('/document/add', [admin_authorization, upload.single('file')], controller.add)
router.post('/document/fill', controller.fill)

router.get('/documents', controller.documents)
router.get('/documents/search', controller.search_documents)

module.exports = router
