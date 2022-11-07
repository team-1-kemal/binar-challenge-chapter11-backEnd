const { gamePlay } = require("../controllers/gameController");
const router = require("express").Router();

router.post("/:id", gamePlay);

module.exports = router;
