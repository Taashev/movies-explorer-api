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

router.post('/movies', validationCreateMovie, createMovie);
router.get('/movies/me', getMovies);
router.delete('/movies/:movieId', validationDeleteMovie, deleteMovie);

module.exports = router;
