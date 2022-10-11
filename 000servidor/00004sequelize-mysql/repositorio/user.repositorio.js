const bcrypt = require('bcrypt')
const User = require('../models/User')

//OBTENER TODOS LOS USUARIOS
const getUsers = async() => {
    return await User.findAll()
}

//OBTENER UN SOLO USUARIO
const getOneUser = async(id) => {
    return await User.findByPk(id)
}

const getEmail = async(email) => {
    return await User.findOne(email)
}
const createUser = async(user) => {
    user.password = await bcrypt.hash(user.password, 10)
    return await User.create(user)
}

const updateUser = async(id, user) => {
    return await User.update(user, { where: { id } })
}

const removeUser = async(id) => {
    return await User.destroy({ where: { id } })
}

module.exports = {
    getUsers,
    getOneUser,
    getEmail,
    createUser,
    updateUser,
    removeUser
} 