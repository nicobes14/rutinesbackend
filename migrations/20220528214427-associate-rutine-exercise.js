'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'rutineexercises',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        rutineId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        exerciseId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('rutineexercises');
  }
};
