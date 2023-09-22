'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Vaasu Bisht',
        email: 'bishtvaasu@gmail.com',
        password:'vaasu_password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User1',
        email: 'user1@gmail.com',
        password:'users1_password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User2',
        email: 'user2@gmail.com',
        password:'user2_password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User3',
        email: 'user3@gmail.com',
        password:'users3_password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users;', null, {});
  }
};
