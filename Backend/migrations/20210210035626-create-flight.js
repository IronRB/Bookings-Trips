'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rate: {
        type: Sequelize.FLOAT
      },
      schedule: {
        type: Sequelize.DATE
      },
      origin: {
        type: Sequelize.INTEGER,
        references: { //Required field
          model: 'Cities',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      destiny: {
        type: Sequelize.INTEGER,
        references: { //Required field
          model: 'Cities',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      freeSeats: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Flights');
  }
};