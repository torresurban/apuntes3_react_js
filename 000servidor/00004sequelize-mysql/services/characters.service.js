const characterRepository = require('../repositorio/characters.repositorio')

const findByIds = async(id) => {
    return await characterRepository.findByIdCharacter(id)
}

const findByNames = async(name) => {
    return await characterRepository.findByName(name)
}

const findAllCharacters = async(filter, options) => {
return await characterRepository.findAllCharacter(filter, options)}

const saveCharacters = async(c) => {
    return await characterRepository.saveCharacter(c)
}

const updateCharacters = async(id, c) => {
    return await characterRepository.updateCharacter(id, c)
}

const removeCharacters = async(id) => {
    return await characterRepository.removeCharacter(id)
}

module.exports = {
    findByIds,
    findByNames,
    findAllCharacters,
    saveCharacters,
    updateCharacters,
    removeCharacters
}

