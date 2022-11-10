const router = require("express").Router();

const regist = require("./registRoute");
const login = require("./loginRoute");
const game = require("./gameRoute");
const profile = require("./editUserRoute");

router.use("/auth/signup", regist);
router.use("/auth/login", login);
router.use("/game", game);
router.use("/user/profile", profile);

module.exports = router;
