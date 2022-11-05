const { registUser } = require("../controllers/registController");
const router = require("express").Router();

router.post("/", registUser);

module.exports = router;
