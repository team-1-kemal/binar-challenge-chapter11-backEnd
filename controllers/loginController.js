const db = require("../models");
const Users = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../middleware/passport");

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        res.status(404).json({ message: "email not found" });
        return;
      }
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid)
        return res.status(400).json({ message: "wrong password" });

      let token;

      token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      console.log(token);
      res.status(200).json({
        status: 200,
        success: true,
        data: {
          userId: user.id,
          fullName: user.full_name,
          email: user.email,
          token: "Bearer " + token,
        },
        message: "Login successfuly",
        error: null,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: false,
        data: {},
        message: "Login failed!",
        error: true,
      });
    }
  },
};
