'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Point is required field'
        }
      }
    },
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Reviewer is required field'
        }
      }
    },
    movieId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Rate.associate = function(models) {
    Rate.belongsTo(models.Movie, {
      foreignKey: 'movieId',
      as: 'movie',
      onDelete: 'CASCADE',
    })
    // associations can be defined here
  };
  return Rate;
};