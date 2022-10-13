const { port } = require('./config/index.config')
const app = require('./server/server')
const sequelize = require('./sequelize/index.sequelize')

const start = async() => {
    try {
        require('./models/index.models')

        //Testing the connection
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');

        // sequelize.sync crea todas las tablas que no existen actualmente en base a los modelos definidos
        // alternativa: Club.sync();
        // también se pueden pasar los parámetros {alter: true} ó {force: true}
        // para alterar si hay diferencia de columas/datos ó recrear la tabla siempre, respectivamente.
        // alter: y force: no deben usarse nunca en producción, la alteración de tablas debe hacerse con el concepto de Migraciones.
        // si se desea recrear tablas en modo desarrollo es recomendable usar Safety Checks, ej.:
        // sequelize.sync({ force: true, match: /_test$/ }); // sólo corre si el nombre de la base de datos termina en _test

        //Sincronizacion de los modelos(tablas con la base de datos)
        //await sequelize.sync()
        await sequelize.sync({force:false})
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