const { gamePlay } = require("../controllers/gameController");
const passport = require("passport");
const { getUser } = require("../controllers/userController");
require("../middleware/passport");
const router = require("express").Router();

router.get("/:id", passport.authenticate("jwt", { session: false }), getUser);
router.put("/:gameId/:id", gamePlay);

module.exports = router;
