const router = require("express").Router();
const regist = require("./registRoute");

router.use("/", regist);

module.exports = router;
