const movieRepository = require('../repositorio/movies.repositorio')
const characterRepository = require('../repositorio/characters.repositorio')
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
    const genderTypes = await genderTypeRepository.findByDescription(m.genderTypes)
    const contentTypes = await contentTypeRepository.findfindByDescription(m.contentTypes)
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

const asociate = async(movie, character) => {
    //const movie = await movieRepository.findByIdMovie(idMovie)
    //const character = await characterRepository.findByIdCharacter(idCharacter)

    await movie.addCharacter(character)

    //return await movieRepository.asociatePeliMovie(moovie, character)
}

module.exports = {
    findById,
    findByTitle,
    findAll,
    save,
    update,
    remove,
    asociate
}