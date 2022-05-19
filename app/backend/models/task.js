'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
  }
  Task.init({
    task: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};