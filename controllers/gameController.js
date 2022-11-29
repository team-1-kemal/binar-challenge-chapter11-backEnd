const db = require("../models");
const { User, GameHistory } = db;

module.exports = {
  gamePlay: async (req, res) => {
    const { id } = req.params;
    const { gameId } = req.params;
    const { point } = req.query;
    const { title } = req.query;
    try {
      await User.update({ point }, { where: { id: id } });
      res.status(200).json({
        status: 200,
        success: true,
        data: point,
        message: "Data has been input!",
        error: null,
      });
      await GameHistory.create({
        UserId: id,
        GameId: gameId,
        gameplay: new Date(),
        game_title: title,
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
};
