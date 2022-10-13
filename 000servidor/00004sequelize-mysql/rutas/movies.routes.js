const { Router } = require('express')
const router = Router()

const {
    createPeliculas,
    deletePelicula,
    getAllPeliculas,
    getPeliculaById,
    updatePeliculas,
    asociateCharacter
} = require('../controllers/movies.controllers')

router.get('/', getAllPeliculas);
router.post('/', createPeliculas);
router.put('/:id', updatePeliculas);
router.delete('/:id',deletePelicula );
router.get('/:id', getPeliculaById);
router.put('/:idMovie/character/:idCharcater/', asociateCharacter)

module.exports = router