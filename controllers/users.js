const Users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (!email) return res.status(404).json({ message: 'email not found' });

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid)
    return res.status(400).json({ message: 'wrong password' });

  let token;
  try {
    token = jwt.sign({ userId: user.id, email: user.email }, 'inirahasia', {
      expiresIn: '1h',
    });
  } catch (err) {
    console.log(err);
    const error = new Error('Error! Something went wrong.');
    return next(error);
  }
  res.status(200).json({
    success: true,
    data: {
      userId: user.id,
      email: user.email,
      token: token,
    },
  });
};

export default Login;
