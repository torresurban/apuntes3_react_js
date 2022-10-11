require('dotenv').config()

module.exports = {
    data: {
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        portdb: process.env.PORT_DB
    },
    port: process.env.PORT || 3000
}