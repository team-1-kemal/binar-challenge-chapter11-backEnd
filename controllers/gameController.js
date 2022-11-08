const db = require("../models");
const { User, GameHistory } = db;

module.exports = {
  gamePlay: async (req, res) => {
    const { id } = req.params;
    const { getPoint } = req.query;
    const user = await User.findOne({ where: { id } });
    try {
      await GameHistory.create({
        UserId: id,
        GameId: 1,
        gameplay: new Date(),
      });

      await User.update({ point: (user.point += getPoint) }, { where: { id } });
      res.status(200).json({
        status: 200,
        success: true,
        data: {},
        message: "Data has been input!",
        error: null,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: false,
        data: {},
        message: "Failed to input data!",
        error: error.message,
      });
    }
  },
  gameCheck: async (req, res) => {
    const { id } = req.params;
    const users = await User.findAll({ where: { id }, include: [GameHistory] });
    res.json({
      users,
    });
  },
};
