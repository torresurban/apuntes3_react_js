require('dotenv').config()

module.exports = {
    data:{
        host: process.env.DATABASE_HOST6,
        username: process.env.DATABASE_USERNAME6,
        password: process.env.DATABASE_PASSWORD6,
        database: process.env.DATABASE_NAME6,
        dialect: process.env.DIALECT6,
        portdb: process.env.PORT_DB6
    },
    port: process.env.PORT || 3000,
    apiKey: process.env.API_KEY_6
}