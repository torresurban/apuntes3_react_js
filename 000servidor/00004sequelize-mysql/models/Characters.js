const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize/index.sequelize')

const Character = sequelize.define('Personaje', {
    iamge:{
        type: DataTypes.STRING(250),
        allowNull: true
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    history:{
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    weight:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    freezeTableName:true
})

module.exports = Character