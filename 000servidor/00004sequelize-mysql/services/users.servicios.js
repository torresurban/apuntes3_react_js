const userRepository = require('../repositorio/user.repositorio')

const findAll = async(filter, options) => {
    return await userRepository.getUsers()
}

const save = async(user) => {
    return await userRepository.createUser(user)
}

const findById = async(id) => {
    return await userRepository.getOneUser(id)
}

const findByEmails = async(email) => {
    return await userRepository.getEmail(email)
}

const update = async(id, datos) => {
    return await userRepository.updateUser(id, datos)
}

const remove = async(id) => {
    return await userRepository.removeUser(id)
}

module.exports = {
    findAll,
    save,
    findById,
    findByEmails,
    update,
    remove
}