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
 {
          title: "PACMAN",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non fuga delectus perferendis consectetur odit",
          publish: 2022,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
	   {
          title: "CADILLACS DINOSAUR",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non fuga delectus perferendis consectetur odit",
          publish: 2022,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
	       {
          title: "OUTRUN",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non fuga delectus perferendis consectetur odit",
          publish: 2022,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
	       {
          title: "PUNCHOUT",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non fuga delectus perferendis consectetur odit",
          publish: 2022,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
	       {
          title: "SPACE INVADERS",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non fuga delectus perferendis consectetur odit",
          publish: 2022,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
	       {
          title: "GUESS THE NUMBER",
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
