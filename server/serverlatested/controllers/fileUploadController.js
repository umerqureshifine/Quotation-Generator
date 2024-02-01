// // Import required modules
// const multer = require('multer');
// const path = require('path');

// // Configure Multer for file upload with fileFilter
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   // Allow only certain file types
//   const allowedExtensions = ['.jpg', '.jpeg', '.png'];
//   const fileExtension = path.extname(file.originalname).toLowerCase();

//   if (allowedExtensions.includes(fileExtension)) {
//     // Accept the file
//     cb(null, true);
//   } else {
//     // Reject the file with an error message
//     cb(new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.'));
//   }
// };

// // Initialize Multer with configured storage and fileFilter
// const upload = multer({ storage, fileFilter });

// module.exports = upload;

// const multer = require('multer');
// const path = require('path');

// // Configure Multer for file upload with fileFilter
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now()  + file.originalname);
//   },
// });


// const fileFilter = (req, file, cb) => {
//   // Allow only certain file types
//   const allowedExtensions = ['.jpg', '.jpeg', '.png','.webp'];
//   const fileExtension = path.extname(file.originalname).toLowerCase();

//   if (allowedExtensions.includes(fileExtension)) {
//     // Accept the file
//     cb(null, true);
//   } else {
//     // Reject the file with an error message
//     cb(new Error('Invalid file type. Only JPG, JPEG, WEBP and PNG are allowed.'));
//   }
// };

// const upload = multer({ storage, fileFilter });

// module.exports = upload;  


const multer = require('multer');
const path = require('path');

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // Allow only certain file types
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const fileExtension = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(fileExtension)) {
    // Accept the file
    cb(null, true);
  } else {
    // Reject the file with an error message
    cb(new Error('Invalid file type. Only JPG, JPEG, WEBP, and PNG are allowed.'));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;



