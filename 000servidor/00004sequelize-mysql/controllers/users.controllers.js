const userServices = require('../services/users.servicios')

const getUsuarios = async(req, res) => {
    try {
        const users = await userServices.findAll()
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

const crearUsuario = async(req, res) => {
    try {
        //let user = req.body
        const user = await userServices.save(req.body)

        res.status(201).json(user)
    } catch (error) {
        console.log(error)
    }
}

const getOneUsuario = async(req, res) => {
    try {
        const user = await userServices.findById(req.params.id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

const updateUsuario = async(req, res) => {
    try {
        const { id } = req.params
        let user = req.body
        user.id = id
        const userUpdated = await userServices.update(id, user)
        res.json({
            message:'Tarea actualizada',
            userUpdated
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteUsuario = async(req, res) => {
    try {
        const { id } = req.params
        const usuario = await userServices.remove(id)
        res.json({
            message:'Usuario elimando',
            usuario
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUsuarios,
    crearUsuario,
    getOneUsuario,
    updateUsuario,
    deleteUsuario
}