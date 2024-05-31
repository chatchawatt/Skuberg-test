const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // กำหนดชื่อไฟล์ SQLite
});

module.exports = sequelize;
