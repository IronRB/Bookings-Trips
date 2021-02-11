'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        user: 3,
        flight: 1,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        user: 2,
        flight: 2,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
