'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          name: "Robert",
          username: "Robert",
          password: "1234",
          age: 25,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          name: "Laura",
          username: "Laura",
          password: "1234",
          age: 15,
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
