const { Router } = require('express')
const router = Router()

const {
    getAllPersonajes,
    getPersonajeById,
    createPersonajes,
    updatePersonaje,
    deletePersonaje
} = require('../controllers/characters.controllers')

router.get('/', getAllPersonajes)
router.get('/:id', getPersonajeById)
router.post('/', createPersonajes)
router.put('/:id', updatePersonaje)
router.delete('/:id', deletePersonaje)

module.exports = router