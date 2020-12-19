const { Router } = require('express')
const multer = require('multer')

require('dotenv').config({ path: '../../.env' })

const upload = multer({
    
    dest: `../${process.env.UPLOAD_FOLDER}/`,
    limits: {

        fileSize: Number(process.env.UPLOAD_FILESIZE_LIMIT) * 1000000

    },

    fileFilter: function( req, file, cb ) {

        if( file.mimetype !== 'application/pdf' )
            return cb( new Error('Invalid file format') )

        cb( null, true )

    }

})

const controller = require('../controllers/document')
const admin_authorization = require('../authorizations/admin')

const router = Router( )

router.get('/documents', controller.documents)
router.post('/document/add', [admin_authorization, upload.single('file')], controller.add)

module.exports = router