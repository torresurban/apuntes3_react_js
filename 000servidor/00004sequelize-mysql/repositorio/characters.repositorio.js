const { Op } = require('sequelize')
const Character = require('../models/Characters')
const Movie = require('../models/Movies')

const findAllCharacter = async({name, age, weight}) => {
    let base = {}
    if(name){
        base.name = {
            [Op.like]:`%${name}%`
        }
    }
    if(age){
        base.age = {
            [Op.eq]:age
        }
    }
    if(weight){
        base.weight = {
            [Op.eq]:weight
        }
    }

    return await Character.findAll({
        base,
        attributes:['name', 'age','weight']
    })
}

const findByIdCharacter = async(id) => {
    return await Character.findByPk(id, {
        include:[{
            model:Movie,
            as:'movies'
        }]
    })
}

const findByName = async(name) => {
    return await Character.findOne({ where: { name } })
}

const saveCharacter = async(c) => {
    return await Character.create(c)
}

const updateCharacter = async(id, c) => {
    return await Character.update(c, { where: { id } })
}

const removeCharacter = async(id) => {
    return await Character.destroy({ where: { id } })
}


module.exports = {
    findAllCharacter,
    findByIdCharacter,
    findByName,
    saveCharacter,
    updateCharacter,
    removeCharacter
}