const { loginUser } = require('../controllers/loginController');
const router = require('express').Router();

router.get('/login', (req, res) => res.send('test'));
router.post('/auth/login', loginUser);

module.exports = router;
