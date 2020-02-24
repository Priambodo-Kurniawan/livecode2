'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Rates', 'movieId'),
      queryInterface.addColumn(
        'Rates',
        'movieId',
        {
          type: Sequelize.INTEGER
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Rates', 'movieId')
    ]);
  }
};
