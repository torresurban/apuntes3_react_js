const GenderType = require('../models/GenderTypes')

const findById = async(id) => {
    return await GenderType.findByPk(id)
}

const findByDescription = async(description) => {
    return await GenderType.findOne({ where: { description } })
}

module.exports = {
    findById,
    findByDescription
}