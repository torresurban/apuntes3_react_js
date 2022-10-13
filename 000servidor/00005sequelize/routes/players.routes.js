const { Router } = require('express')
const router = Router()

const {
    consultarTodosLosJugadores,
    crearJugador,
    consultarJugadorAsociadoUnEquipo
} = require('../controllers/jugadores.controllers')

router.get('/', consultarTodosLosJugadores)
router.post('/', crearJugador)
router.get('/:id', consultarJugadorAsociadoUnEquipo)

module.exports = router