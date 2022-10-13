const { port } = require('./config/index.config')
const app = require('./server/index.server')
const sequelize = require('./sequelize/index.sequelize')

const start = async() => {
    try {

        //Testing the connection
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');

        await sequelize.sync()
        //await sequelize.sync({force:false})
        //await sequelize.sync({force:true})
        //await sequelize.drop()
        //await sequelize.sync({alter:true})
        console.log("All models were synchronized successfully.");


        app.listen(port, () => console.log(`Servidor en el puerto ${port}`))
    } catch (error) {
        console.log(error)
    }
}

module.exports = start