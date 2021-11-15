const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NOME, process.env.DB_USUARIO, process.env.DB_SENHA, {
    host: 'localhost',
    dialect: process.env.DB_
});

module.exports = sequelize;