const multer = require("multer");

const fileUpload = multer({
  limits: 5000000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + "-" + file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

module.exports = fileUpload;
