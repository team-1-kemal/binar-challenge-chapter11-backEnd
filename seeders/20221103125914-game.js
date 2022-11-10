"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          title: "ROCK PAPER SCISSOR",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non fuga delectus perferendis consectetur odit",
          publish: 2022,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Games", null, {});
  },
};
