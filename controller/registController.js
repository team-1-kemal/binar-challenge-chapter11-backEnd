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
      dob: req.body.date,
      point: !req.body.point ? 0 : req.body.point,
    };
    try {
      await User.create(payload);
      res.status(200).json({
        message: "SUCCESS",
        result: payload,
      });
    } catch (error) {
      res.status(503).json({
        message: "FAILED",
        result: error,
      });
    }
  },
};
