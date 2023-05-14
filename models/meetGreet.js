'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band }) {
      // define association here
      meetGreet.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })
    }
  }
  meetGreet.init({
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'meetGreet',
  });
  return meetGreet;
};