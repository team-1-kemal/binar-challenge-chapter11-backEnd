"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("GameHistories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
      },
      GameId: {
        type: Sequelize.INTEGER,
      },
      gameplay: {
        type: Sequelize.DATEONLY,
      },
	    game_title: {
	type: Sequelize.STRING
	    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("GameHistories");
  },
};
