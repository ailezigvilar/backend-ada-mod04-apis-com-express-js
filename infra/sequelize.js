const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './infra/tasks.db', 
});

module.exports = sequelize;