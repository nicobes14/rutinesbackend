'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('Users', 'rutineId', {
    type: Sequelize.INTEGER,
    references: {
      model: 'Rutines',
      key: 'id'
    },
  },)},

  async down (queryInterface, Sequelize) {
  await queryInterface.deleteColumn('Users', 'rutineId')
  }
};
