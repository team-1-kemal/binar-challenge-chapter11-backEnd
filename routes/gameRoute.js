const { gamePlay, gameCheck } = require('../controllers/gameController');
const passport = require('passport');
require('../middleware/passport');
const router = require('express').Router();

router.get('/:id', passport.authenticate('jwt', { session: false }), gameCheck);
router.post('/:id', gamePlay);

module.exports = router;
