'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      showId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Shows',
          key:'id'
        },
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'id'
        },
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['BOOKED', 'CANCELLED', 'INITIATED', 'PENDING'],
        defaultValue: 'INITIATED',
        allowNull: false
      },
      noofSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      totalCost: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Bookings');
  }
};