const { Router } = require('express')
const router = Router()
const {
    crearClub,
    todosLosClubs,
    soloUnClub,
    eliminarClub,
    actualizarClub
} = require('../controllers/index.controllers')

router.post('/', crearClub)
router.get('/', todosLosClubs)
router.get('/:id', soloUnClub)
router.delete('/:id', eliminarClub)
router.put('/:id', actualizarClub)

module.exports = router