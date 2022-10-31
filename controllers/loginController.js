const db = require('../models');
const Users = db.User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({
        where: {
          email: email,
        },
      });
      console.log(password);

      if (!user) {
        res.status(404).json({ message: 'email not found' });
        return;
      }
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid)
        return res.status(400).json({ message: 'wrong password' });

      let token;

      token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1h',
        }
      );
      res.status(200).json({
        success: true,
        data: {
          userId: user.id,
          username: user.full_name,
          email: user.email,
          token: token,
        },
      });
    } catch (err) {
      console.log(err);
      const error = new Error('Error! Something went wrong.');
      return error;
    }
  },
};
