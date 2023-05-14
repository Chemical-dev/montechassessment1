'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('UserMovie', 'rating', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('UserMovie', 'rating', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
