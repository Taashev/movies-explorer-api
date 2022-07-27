const Movie = require('../models/movie');
const NotFoundError = require('../components/NotFoundError');
const Forbidden = require('../components/ForbiddenError');
const { errorMessages } = require('../utils/constants');

// create movie
const createMovie = (req, res, next) => {
  const { body } = req;
  body.owner = req.user._id;

  Movie.create(body)
    .then((movie) => res.send(movie))
    .catch(next);
};

// get movies
const getMovies = (req, res, next) => {
  const userId = req.user._id;

  Movie.find({ owner: userId })
    .then((movies) => res.send(movies))
    .catch(next);
};

// delete movie
const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById({ _id: movieId })
    .orFail(new NotFoundError(errorMessages.movieNotFound))
    .then((movie) => {
      const owner = movie.owner.toString();
      const userId = req.user._id;

      if (owner !== userId) {
        return next(new Forbidden(errorMessages.noRights));
      }

      return Movie.findByIdAndRemove({ _id: movieId })
        .then((remoteMovie) => res.send(remoteMovie))
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  createMovie,
  getMovies,
  deleteMovie,
};
