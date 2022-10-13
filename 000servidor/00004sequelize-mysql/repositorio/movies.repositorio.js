const { Op } = require('sequelize')
const Movies = require('../models/Movies')
const GenderType = require('../models/GenderTypes')


const findAllMovies = async({title, calification, creationDate}, {order}) => {
    let where = {}
    if(title){
        where.title = {
            [Op.like]:`%${title}%`
        }
    }
    if(calification){
        where.calification = {
            [Op.eq]:calification
        }
    }
    if(creationDate){
        where.creationDate = {
            [Op.eq]:creationDate
        }
    }

    let config = {
        where,
        attributes:['title','image','creationDate']
    }
    if(order){
        config.order = [order.split(';')]
    }
    return await Movies.findAll(config)
}

const findByIdMovie = async(id) => {
    return await Movies.findByPk(id)
}

const findByIdWithCharacters = async(id) => {
    return await Movies.findByPk(id, {
        include:[
            'characters',
            'genderType',
            'contentType'
        ],
        attributes:['id','title','image','creationdate','calification']
    })
}

const findTitle = async(title) => {
    return await Movies.findOne({ where: {title} })
}

const saveMovies = async(m) => {
    return await Movies.create(m, {
        include: [GenderType]
    })
}

const updateMovies = async(id, m) => {
    return await Movies.update(m , { where: {id} })
}

const removeMovies = async(id) => {
    return await Movies.destroy({ where: {id} })
}

//const asociatePeliMovie = async(idMovie, idPersonaje) => {}

module.exports = {
    findAllMovies,
    findByIdMovie,
    findByIdWithCharacters,
    findTitle,
    saveMovies,
    updateMovies,
    removeMovies,
    
}