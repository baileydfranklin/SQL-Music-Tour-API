'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      // define association here
      SetTime.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })

      SetTime.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })

      SetTime.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stage'
      })
    }
  }
  SetTime.init({
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'setTime'
  });
  return SetTime;
};