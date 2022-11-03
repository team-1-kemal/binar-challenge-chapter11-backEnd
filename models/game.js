"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.hasOne(models.GameHistory, { foreignKey: "GameId" });
    }
  }
  Game.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      publish: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
