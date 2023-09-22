'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('languages', [
      {
        languageName: 'English',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        languageName: 'Hindi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        languageName: 'Tamil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        languageName: 'Telegu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('languages', null, {});
  }
};
