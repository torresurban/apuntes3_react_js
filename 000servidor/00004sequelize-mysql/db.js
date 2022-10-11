const { port } = require('./config/index.config')
const app = require('./server/index.server')
const sequelize = require('./sequelize/index.sequelize')

module.exports = async() => {
    try {
        require('./models/index.models')
        //Testing the connection
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        //Sincronizacion de los modelos(tablas con la base de datos)
        //await sequelize.sync({force:false})
        //await sequelize.drop()
        await sequelize.sync({alter:true})
        console.log("All models were synchronized successfully.");

        app.listen(port)
        console.log(`Servidor en el puerto ${port}`)
    } catch (error) {
        console.log(error)
    }
}

