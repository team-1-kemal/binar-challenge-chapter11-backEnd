const { gamePlay } = require('../controllers/gameController');
const passport = require('passport');
const router = require('express').Router();

router.get('/:id', passport.authenticate('jwt', { session: false }), gamePlay);
router.post('/:id', gamePlay);

module.exports = router;
