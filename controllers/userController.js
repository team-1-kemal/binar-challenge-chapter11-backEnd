const db = require("../models");
const { User, GameHistory } = db;

module.exports = {
  getUser: async (req, res) => {
    const id = req.user.userId;

    try {
      const user = await User.findOne({
        where: { id },
        order: [["point", "DESC"]],
        include: [
          {
            model: GameHistory,
            limit: 5,
          },
        ],
      });

      if (!user) {
        res.status(400).json({
          status: 400,
          success: false,
          data: {},
          message: "Duplicate value",
          error: true,
        });
      }
      res.status(200).json({
        status: 200,
        success: true,
        data: user,
        message: "Get data successfully",
        error: null,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        data: {},
        message: "internal server error",
        error: error.message,
      });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const user = await User.findAll({
        attributes: ["full_name", "point", "city"],
        order: [["point", "DESC"]],
        include: [
          {
            model: GameHistory,
          },
        ],
        limit: 5,
      });

      if (!user) {
        res.status(400).json({
          status: 400,
          success: false,
          data: {},
          message: "Duplicate value",
          error: true,
        });
      }
      res.status(200).json({
        status: 200,
        success: true,
        data: user,
        message: "Get data successfully",
        error: null,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        data: {},
        message: "internal server error",
        error: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    const { userId } = req.user;
    const payload = {
      full_name: req.body.fullName,
      email: req.body.email,
      city: req.body.city,
      dob: req.body.dob,
    };
    try {
      await User.update(payload, { where: { id: userId } });
      res.status(200).json({
        status: 200,
        success: true,
        data: {},
        message: "Update data successfully",
        error: null,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        success: false,
        data: {},
        message: error.message,
        error: true,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await Users.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).send();
      }
      res.status(201).json({
        success: true,
        message: "delete successfull",
      });
    } catch (error) {
      return res.status(501).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },
};
