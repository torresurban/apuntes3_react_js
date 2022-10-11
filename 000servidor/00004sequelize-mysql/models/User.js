const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize/index.sequelize')

const User = sequelize.define('User', {

    username:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique:true
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:true
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    enable:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
},{
    freezeTableName:true
})

module.exports = User