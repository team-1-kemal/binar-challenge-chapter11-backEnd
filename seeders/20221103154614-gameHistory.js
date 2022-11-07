"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameHistories",
      [
        {
          UserId: 1,
          GameId: 1,
          gameplay: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 2,
          GameId: 1,
          gameplay: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 1,
          GameId: 1,
          gameplay: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 3,
          GameId: 1,
          gameplay: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 3,
          GameId: 1,
          gameplay: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameHistories", null, {});
  },
};
