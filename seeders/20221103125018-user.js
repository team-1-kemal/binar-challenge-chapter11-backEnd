"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          full_name: "Jhon Doe",
          email: "john@gmail.com",
          password: bcrypt.hashSync("testing123", 10),
          dob: new Date(),
          city: "jakarta",
          point: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Marsha Lenathea",
          email: "marsha@gmail.com",
          password: bcrypt.hashSync("testing123", 10),
          dob: new Date(),
          city: "jakarta",
          point: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Shani Indira Natio",
          email: "shani@gmail.com",
          password: bcrypt.hashSync("testing123", 10),
          dob: new Date(),
          city: "yogyakarta",
          point: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
