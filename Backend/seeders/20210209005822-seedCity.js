'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', [
      {
        name: "Medellin",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        name: "Bogota",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        name: "Cali",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        name: "Barranquilla",
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
