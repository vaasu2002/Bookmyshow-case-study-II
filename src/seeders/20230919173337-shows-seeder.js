'use strict';
const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const shows = [];

    const startDate = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      for (let j = 0; j < 2; j++) {
        shows.push({
          theaterId: faker.random.number({ min: 1, max: 4 }), 
          movieId: faker.random.number({ min: 1, max: 4 }),
          languageId: faker.random.number({ min: 1, max: 4 }),
          date: currentDate.toISOString().slice(0, 10),
          time: faker.random.arrayElement(['06:00:00', '09:00:00', '10:00:00', '17:00:00']),
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    return queryInterface.bulkInsert('Shows', shows);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shows', null, {});
  }
};
