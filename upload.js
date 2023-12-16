const multer = require('multer')

//set up storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ '_' + file.originalname);
    }
})

//create multer instance
const upload = multer({storage : storage})
module.exports = upload
