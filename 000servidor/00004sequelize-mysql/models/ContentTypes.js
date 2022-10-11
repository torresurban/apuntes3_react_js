const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize/index.sequelize')

const ContentTypes = sequelize.define('Content', {
    description:{
        type: DataTypes.STRING(50),
        allowNull: false,
    }
},{
    timestamps:false,
    freezeTableName:true
})

module.exports = ContentTypes