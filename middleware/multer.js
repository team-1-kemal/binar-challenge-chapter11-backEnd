const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../game-nation/public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      // path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname)
      file.originalname
    );
  },
});

const upload = multer({ storage });

module.exports = upload;
