const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/services/post/uploadImg/tempImges/');
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb({ message: 'Unsupported file format' }, false);
  }
};

const fileHandler = multer({
  storage,
  limit: { fileSize: 1024 * 1024 }, // 1MB
  fileFilter,
});

module.exports = fileHandler;
