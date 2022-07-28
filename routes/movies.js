const router = require('express').Router();
const {
  validationCreateMovie,
  validationDeleteMovie,
} = require('../utils/joiValidation');
const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

router.post('/', validationCreateMovie, createMovie);
router.get('/me', getMovies);
router.delete('/:movieId', validationDeleteMovie, deleteMovie);

module.exports = router;
