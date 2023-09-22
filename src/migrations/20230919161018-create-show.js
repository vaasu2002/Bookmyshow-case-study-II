'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      theaterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Theaters',
          key:'id'
        },
      },
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Movies',
          key:'id'
        },
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'Languages',
          key:'id'
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shows');
  }
};