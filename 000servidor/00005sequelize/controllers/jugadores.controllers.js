const { Op } = require('sequelize')
const Jugador = require('../models/Jugadores')
const Equipo = require('../models/LigaItaliana')

const consultarTodosLosJugadores = async(req, res) => {
    try {
        const { nombre='' } = req.query
        const player = await Jugador.findAll({
            where:{
                nombre:{
                    [Op.like]:`%${nombre}%`
                }
            },
            attributes:['fk_equipo','nombre']
        })
        res.json({
            player
        })
    } catch (error) {
        console.log(error)
    }
}

const crearJugador = async(req, res) => {
    try {
        const player = await Jugador.create(req.body)
        res.json({
            message:'Jugador creado exitosamente',
            player
        })
    } catch (error) {
        console.log(error)
    }
}

const consultarJugadorAsociadoUnEquipo = async(req, res) => {
    try {
        const { id } = req.params
        const result = await Jugador.findByPk(id, {
            include:[{
                model:Equipo,
                attributes:['nombre','posicion']
            }],
            attributes:['nombre']
        })

        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    consultarTodosLosJugadores,
    crearJugador,
    consultarJugadorAsociadoUnEquipo
}