const passport = require("passport");
require("../middleware/passport");
const router = require("express").Router();
const { getUser, updateUser, deleteUser, getAllUser } = require("../controllers/userController");
const upload = require("../middleware/multer");

router.get("/:id", passport.authenticate("jwt", { session: false }), getUser);
router.get("/", getAllUser);
router.put("/:id", [passport.authenticate("jwt", { session: false }), upload.single("pict")], updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
