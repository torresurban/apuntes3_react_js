require('dotenv').config()

module.exports = {
    data:{
        host: process.env.DATABASE_HOST5,
        username: process.env.DATABASE_USERNAME5,
        password: process.env.DATABASE_PASSWORD5,
        database: process.env.DATABASE_NAME5,
        portdb: process.env.PORT_DB5
    },
    port: process.env.PORT || 3000
}