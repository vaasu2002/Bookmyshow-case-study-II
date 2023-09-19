'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Theaters', [
      {
        theaterName: 'Cinepolis: Cross River Mall, Shahdara',
        address: 'Cross River Mall, Central Business,Shahdara, Near Karkardooma Court, Delhi, NCR 110032, India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterName: 'INOX: Patel Nagar',
        address: 'Behind Shadipur Metro Station, Patel Nagar, Suman Lata Bhadola Marg, Delhi, NCR 110008, India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterName: 'PVR Promenade: Vasant Kunj',
        address: 'DLF Promenade Mall, 2nd Floor, Phase 2, Nelson Mandela Road, Vasant Kunj, Delhi, NCR 110070, India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterName: 'Batra Reels Cinemas: New Friends Colony',
        address: 'Grand Mall Community Centre,1, Maulana Mohammad Ali Jauhar Marg, Friends Colony West, New Friends Colony, Delhi, NCR 110025, India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Theaters', null, {});
  }
};
