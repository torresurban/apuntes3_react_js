const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize/index.sequelize')

const Movies = sequelize.define('Movie', {
    image:{
        type: DataTypes.STRING(250),
        allowNull: true
    },
    title:{
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    creationDate:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    calification:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    freezeTableName: true
})

module.exports = Movies