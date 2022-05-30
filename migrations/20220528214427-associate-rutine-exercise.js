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
          references: {
            model: 'rutines',
            key: 'id',
          },
        },
        exerciseId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'exercises',
            key: 'id',
          },
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('rutineexercises');
  }
};
