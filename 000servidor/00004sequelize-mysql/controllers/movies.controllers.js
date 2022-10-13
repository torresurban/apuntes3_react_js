const movieService = require('../services/movies.service')

const getAllPeliculas = async(req, res) => {
    try {
        const { filter='', options='' } = req.params
        const movies = await movieService.findAll(filter, options)
        res.json(movies)
    } catch (error) {
        console.log(error)
    }
}

const createPeliculas = async(req, res) => {
    try {
        // let m = req.body
        // m = await movieService.save(m)
        const dato = await movieService.save(req.body)
        res.status(201).json({
            message:'creado exitosamente',
            dato
        })
    } catch (error) {
        console.log(error)
    }
}

const updatePeliculas = async(req, res) => {
    try {
        const { id } = req.params
        let m = req.body

        const peliculaUpdate = await movieService.update(id, m)
        res.json({
            message:'Actualizacion exitosa',
            peliculaUpdate
        })
    } catch (error) {
        console.log(error)
    }
}

const getPeliculaById = async (req, res) => {
    try {
        const { id } = req.params;
        const m = await movieService.findById(id);

        res.json(m);

    } catch (error) {
        console.log(error)
    }
}

const deletePelicula = async(req, res) => {
    try {
        const { id } = req.params
        const m = await movieService.remove(id)
        res.json({
            message:'Eliminado exitosamente',
            m
        })
    } catch (error) {
        console.log(error)
    }
}

const asociateCharacter = async(req, res) => {
    try {
        const character = req.character
        const movie = req.movie
        await movieService.asociate(movie, character)
        res.json()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllPeliculas,
    createPeliculas,
    updatePeliculas,
    getPeliculaById,
    deletePelicula,
    asociateCharacter
}