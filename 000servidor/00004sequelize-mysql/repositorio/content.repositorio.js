const ContentType = require('../models/ContentTypes')

const finById = async(id) => {
    return await ContentType.findByPk(id)
}

const findfindByDescription = async(description) => {
    return await ContentType.findOne({ where: {description} })
}


module.exports = {
    finById,
    findfindByDescription
}