'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flights', [
      {
        schedule: "2021-03-20T00:00:00.000Z",
        rate: "1000",
        origin: 1,
        destiny: 3,
        freeSeats: 20
      },
      {
        schedule: "2021-03-20T00:00:00.000Z",
        rate: "2500",
        origin: 2,
        destiny: 1,
        freeSeats: 15
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
