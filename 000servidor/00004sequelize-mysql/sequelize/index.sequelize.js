const { Sequelize } = require('sequelize')
const { data } = require('../config/index.config')

const { host, password, username, database, portdb } = data

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host:host,
        dialect:'mysql',
        port:portdb
    },
    
)


module.exports = sequelize