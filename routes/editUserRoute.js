const passport = require('passport');
require('../middleware/passport');
const router = require('express').Router();
const UserController = require('../controllers/userController');

router.get(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  UserController.updateUser
);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);
