const movieRepository = require('../repositorio/movies.repositorio')
const genderTypeRepository = require('../repositorio/gender.repositorio')
const contentTypeRepository = require('../repositorio/content.repositorio')

const findById = async(id) => {
    return await movieRepository.findByIdWithCharacters(id)
}

const findByTitle = async(title) => {
    return await movieRepository.findTitle(title)
}

const findAll = async(filter, options) => {
    return await movieRepository.findAllMovies(filter, options)
}

const save = async(m) => {
    const genderTypes = await genderTypeRepository.findByDescription(m.genderTipo)
    const contentTypes = await contentTypeRepository.findfindByDescription(m.contentTipo)
    m.genderTypeId = genderTypes.id
    m.contentTypeId = contentTypes.id
    return await movieRepository.saveMovies(m)
}

const update = async(id, m) => {
    const genderTypes = await genderTypeRepository.findByDescription(m.genderTipo)
    const contentTypes = await contentTypeRepository.findfindByDescription(m.contentTipo)
    m.genderTypeId = genderTypes.id
    m.contentTypeId = contentTypes.id
    return await movieRepository.updateMovies(id, m)
}

const remove = async(id) => {
    return await movieRepository.removeMovies(id)
}

module.exports = {
    findById,
    findByTitle,
    findAll,
    save,
    update,
    remove
}