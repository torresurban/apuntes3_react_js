const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize/index.sequelize')

const GenderTypes = sequelize.define('Gender', {
    description:{
        type: DataTypes.STRING(50),
        allowNull: false,
    }
},{
    freezeTableName:true,
    timestamps:false
})

module.exports = GenderTypes