const { Router } = require('express')
const router = Router()

const { getUsuarios, crearUsuario, getOneUsuario, updateUsuario, deleteUsuario } = require('../controllers/users.controllers')

router.get('/', getUsuarios)
router.post('/', crearUsuario)
router.get('/:id', getOneUsuario)
router.put('/:id', updateUsuario)
router.delete('/:id', deleteUsuario)

module.exports = router