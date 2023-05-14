'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({  meetGreet, setTime }) {
      // define association here
      Event.hasMany(meetGreet, {
        foreignKey: 'event_id',
        as: 'meet_greets'
      })

      Event.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })

      Event.belongsTo(Event, {
        foreignKey: '',
        as: ''
      })
    }
  }
  Event.init({
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });
  return Event;
};