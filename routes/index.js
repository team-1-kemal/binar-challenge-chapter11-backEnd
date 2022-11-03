const router = require("express").Router();
const regist = require("./registRoute");
const login = require("./loginRoute");
const game = require("./gameRoute");
const { verifyToken } = require("../middleware/verifyToken");

router.use("/auth/signup", regist);
router.use("/auth/login", login);
router.use("/play/rockpaperscissor", game);

module.exports = router;
