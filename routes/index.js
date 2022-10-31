const router = require('express').Router();
const regist = require('./registRoute');
const login = require('./loginRoute');
const { verifyToken } = require('../middleware/verifyToken');

router.use('/', regist);
router.use('/', login);

module.exports = router;
