const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize/index.sequelize')
//const LigaItaliana = require('./LigaItaliana')

const Jugadores = sequelize.define('Jugadores', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fk_equipo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'ligaitaliana',
          },
          key: "id",
        },
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        }
},{
    tableName: "jugadores",
    createdAt: "created_at",
    updatedAt: "updated_at",
})

module.exports = Jugadores