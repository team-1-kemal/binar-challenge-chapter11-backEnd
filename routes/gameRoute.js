const { gamePlay } = require("../controllers/gameController");
const router = require("express").Router();

router.get("/:id", gamePlay);

module.exports = router;
