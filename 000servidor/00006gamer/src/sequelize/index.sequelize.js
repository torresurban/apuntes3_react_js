const { Sequelize } = require('sequelize')
const { data } = require('../config/index.config')

const { username, password, host, database, portdb } = data

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${portdb}/${database}`)

module.exports = sequelize