"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      full_name: {
        type: Sequelize.STRING,
        autoNull: false,
      },
      email: {
        type: Sequelize.STRING,
        autoNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        autoNull: false,
      },
      dob: {
        type: Sequelize.DATEONLY,
        autoNull: false,
      },
      city: {
        type: Sequelize.STRING,
        autoNull: false,
      },
      point: {
        type: Sequelize.INTEGER,
        autoNull: false,
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
    await queryInterface.dropTable("Users");
  },
};
