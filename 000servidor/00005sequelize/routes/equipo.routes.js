const { Router } = require('express')
const router = Router()

const {
    consultarEquiposDeLaLigaConFiltro,
    crearEquipo,
    consultarEquipoConAsociacionDeJugadores
} = require('../controllers/equipo.controllers')

router.get('/', consultarEquiposDeLaLigaConFiltro)
router.post('/', crearEquipo)
router.get('/:id', consultarEquipoConAsociacionDeJugadores)

module.exports = router