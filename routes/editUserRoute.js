const passport = require("passport");
require("../middleware/passport");
const router = require("express").Router();
const { getUser, updateUser, deleteUser } = require("../controllers/userController");

router.get("/:id", passport.authenticate("jwt", { session: false }), getUser);
router.put("/:id", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
