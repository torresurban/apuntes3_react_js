const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize/index.sequelize')

const Club = sequelize.define('Club', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false  //no acepta valores nulos
    },
    fundado:DataTypes.DATE  //'shorthand' para columnas sin adicionales
},{
    // Sequelize crea created_at, updated_at automáticamnete, nosotros los queremos en espanñol.
    createdAt:'creado_en',
    updatedAt:'modificado_en',
    tableName:'clubes' // no queremos utilizar inflexión, podemos definirlo manualmente
})

module.exports = Club