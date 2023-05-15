const { QueryInterface, DataTypes } = require('sequelize');

const up = async (queryInterface) => {
  await queryInterface.createTable('UserMovie', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    yearReleased: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  });
};

const down = async (queryInterface) => {
  await queryInterface.dropTable('UserMovie');
};

module.exports = {
  up,
  down,
};