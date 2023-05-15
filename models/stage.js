'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ event, stageEvent }) {
      // define association here
      stage.belongsToMany(event, {
        foreignKey: 'stage_id',
        as: 'events',
        through: stageEvent
      })
    }
  }
  stage.init({
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'stage',
  });
  return stage;
};