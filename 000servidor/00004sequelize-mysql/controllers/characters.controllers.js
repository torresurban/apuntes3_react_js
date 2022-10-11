const characterService = require('../services/characters.service')

const getAllPersonajes = async(req, res) => {
    try {
        const { filter='', options='' } = req.params
        const personajes = await characterService.findAllCharacters(filter, options)
        res.json(personajes)
    } catch (error) {
        console.log(error)
    }
}

const createPersonajes = async(req, res) => {
    try {
        //let c = req.body
        const c = await characterService.saveCharacters(req.body)
        res.status(201).json({
            c,
            message:'Personaje creado exitosamente'
        })

    } catch (error) {
        console.log(error)
    }
}

const updatePersonaje = async(req, res) => {
    try {
        const { id } = req.params
        let c = req.body
        const personajeUpdate = await characterService.updateCharacters(id, c)
        res.json({
            personajeUpdate,
            message:'Se actualizo correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}

const getPersonajeById = async(req, res) => {
    try {
        const { id } = req.params
        const personaje = await characterService.findByIds(id)
        res.json(personaje)
    } catch (error) {
        console.log(error)
    }
}

const deletePersonaje = async(req, res) => {
    try {
        const { id } = req.params
        const personaje = await characterService.removeCharacters(id)
        res.json({
            message:'Personaje eliminado',
            personaje
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllPersonajes,
    createPersonajes,
    updatePersonaje,
    getPersonajeById,
    deletePersonaje
}