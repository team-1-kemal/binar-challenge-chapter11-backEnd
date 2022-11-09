const { gamePlay, gameCheck } = require('../controllers/gameController');
const passport = require('passport');
require('../middleware/passport');
const router = require('express').Router();

router.get('/:id', passport.authenticate, gameCheck);
router.post('/:id', passport.authenticate('jwt', { session: false }), gamePlay);

module.exports = router;
