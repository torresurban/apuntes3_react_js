const Club = require('../models/Club')

const crearClub = async(req, res) => {
    try {
        const club = await Club.create(req.body)
        res.status(201).json({
            message:'Creado satisfactoriamente',
            club,
        })
        //console.log(club.toJSON())

    } catch (error) {
        console.log(error)
    }
}

const todosLosClubs = async(req, res) => {
    try {
        const clubes = await Club.findAll({attributes:['nombre','fundado']})
        res.json(clubes)

        //console.log(`hay ${clubes.length} clubes`)
        //console.log(clubes.map(club => club.toJSON()))

    } catch (error) {
        console.log(error)
    }
}

const soloUnClub = async(req, res) => {
    try {
        const { id } = req.params
        const club = await Club.findByPk(id, {
            attributes:['nombre','fundado']
        })
        res.json(club)

        console.log(`¿Cuanto vale ${club}`)

    } catch (error) {
        console.log(error)
    }
}

const eliminarClub = async(req, res) => {
    try {
        const { id } = req.params
        const club = await Club.destroy({ where: {id} })
        res.json({
            message:'Se ha eliminado exitosamente',
            club
        })
    } catch (error) {
        console.log(error)
    }
}
const actualizarClub = async(req, res) => {
    try {
        const { id } = req.params
        let club = req.body
        club.id = id
        const update = await Club.update(club, {where: {id}})
        res.json({
            message:'Club actualizado',
            update
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    crearClub,
    todosLosClubs,
    soloUnClub,
    eliminarClub,
    actualizarClub
}