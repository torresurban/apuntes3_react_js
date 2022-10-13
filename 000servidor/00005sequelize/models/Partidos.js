const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize/index.sequelize')
//const LigaItaliana = require('./LigaItaliana')


const Partidos = sequelize.define('Partidos', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fk_equipo_casa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:'ligaitaliana',
          },
          key: "id",
        },
      },
      fk_equipo_fuera: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:'ligaitaliana',
          },
          key: "id",
        },
      },
      goles_casa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      goles_fuera: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        //defaultValue: "datetime(now)",
      },
      updated_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        //defaultValue: "datetime(now)",
      }
}, {
    tableName: "partidos",
    updatedAt: "updated_at",
    createdAt: "created_at",
})

module.exports = Partidos