'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', [
      {
        movieName: 'Jawan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieName: 'The Nun II',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieName: 'Gadar 2: The Katha Continues',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieName: 'Dream Girl 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
      
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
