const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = req.fdn || 'default'; 
    const uploadPath = `./uploads/${folderName}`;
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  }
});

// Function to handle image upload and return the file path
const uploadImage = (req, res) => {
    return new Promise((resolve, reject) => {
      const fieldName = req.fieldName || 'image'; 
  
      const upload = multer({ storage: storage }).single(fieldName); 
  
      upload(req, res, function (err) {
        if (err) {
          reject(err); 
        } else if (!req.file) {
          reject(new Error('No file uploaded'));
        } else {
          resolve(req.file.path); 
        }
      });
    });
  };

module.exports = uploadImage;
