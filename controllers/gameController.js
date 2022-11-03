const db = require("../models");
const { User, Game, GameHistory } = db;

module.exports = {
  gamePlay: async (req, res) => {
    const { id } = req.params;
    const { point } = req.query;

    const history = await User.findAll({ where: { id: id }, include: [{ model: GameHistory }] });
    res.json({
      status: 200,
      data: history,
    });
  },
};
