const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;

module.exports = {
  registUser: async (req, res) => {
    const payload = {
      full_name: req.body.fullName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      city: req.body.city,
      dob: req.body.dob,
      point: !req.body.point ? 0 : req.body.point,
    };
    try {
      const user = await User.create(payload);
      res.status(200).json({
        status: 200,
        success: true,
        data: {
          Id: user.id,
          username: user.full_name,
          email: user.email,
          city: user.city,
          dob: user.dob,
          point: user.point,
        },
        message: "Sign Up successfuly",
        error: null,
      });
    } catch (error) {
      res.status(503).json({
        status: 503,
        success: false,
        data: {},
        message: "Sign Up Failed",
        error: error.message,
      });
    }
  },
};
