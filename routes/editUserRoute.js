const passport = require("passport");
require("../middleware/passport");
const router = require("express").Router();
const { getUser, updateUser, deleteUser, getAllUser } = require("../controllers/userController");

router.get("/:id", passport.authenticate("jwt", { session: false }), getUser);
router.get("/", getAllUser);
router.put("/:id", passport.authenticate("jwt", { session: false }), updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
