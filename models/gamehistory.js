"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GameHistory extends Model {
    static associate(models) {
      GameHistory.belongsTo(models.Game, { foreignKey: "GameId" });
      GameHistory.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  GameHistory.init(
    {
      UserId: DataTypes.INTEGER,
      GameId: DataTypes.INTEGER,
      gameplay: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "GameHistory",
    }
  );
  return GameHistory;
};
