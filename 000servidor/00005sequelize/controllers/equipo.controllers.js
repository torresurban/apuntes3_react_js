const { Op } = require('sequelize')
const Jugadores = require('../models/Jugadores')
const Equipo = require('../models/LigaItaliana')

const consultarEquiposDeLaLigaConFiltro = async(req, res) => {
    try {
        const {nombre=''} = req.query
        
        const filtro = await Equipo.findAll({
            where:{
                nombre:{
                    [Op.like]:`%${nombre}%`
                }
            }
        })

        res.json(filtro)
    } catch (error) {
        console.log(error)
    }
}

const crearEquipo = async(req, res) => {
    try {
        const e = req.body
        const team = await Equipo.create(e)
        res.json({
            message:'Team creado satisfactoriamente',
            team
        })
    } catch (error) {
        console.log(error)
    }
}

const consultarEquipoConAsociacionDeJugadores = async(req, res) => {
    try {
        const { id } = req.params
        const result =await Equipo.findByPk(id, {
            include:[{
                model:Jugadores,
                attributes:['nombre']
            }]
            
        })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    consultarEquiposDeLaLigaConFiltro,
    crearEquipo,
    consultarEquipoConAsociacionDeJugadores
}