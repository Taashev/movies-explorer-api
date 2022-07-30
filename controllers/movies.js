const Movie = require('../models/movie');
const NotFoundError = require('../components/NotFoundError');
const ForbiddenError = require('../components/ForbiddenError');
const { messageErrors } = require('../utils/constants');
const identifyError = require('../utils/identifyError');

// create movie
const createMovie = (req, res, next) => {
  const { body } = req;
  body.owner = req.user._id;

  Movie.create(body)
    .then((movie) => res.send(movie))
    .catch((err) => next(identifyError(
      /* error */ err,
      /* message */ messageErrors.addMovie,
    )));
};

// get movies
const getMovies = (req, res, next) => {
  const userId = req.user._id;

  Movie.find({ owner: userId })
    .then((movies) => res.send(movies))
    .catch((err) => next(identifyError(err)));
};

// delete movie
const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById({ _id: movieId })
    .orFail(new NotFoundError(messageErrors.movieNotFound))
    .then((movie) => {
      const owner = movie.owner.toString();
      const userId = req.user._id;

      if (owner !== userId) {
        return next(new ForbiddenError(messageErrors.noRights));
      }

      return Movie.findByIdAndRemove({ _id: movieId })
        .then((remoteMovie) => res.send(remoteMovie))
        .catch((err) => next(identifyError(err)));
    })
    .catch((err) => next(identifyError(err, messageErrors.moviedId)));
};

module.exports = {
  createMovie,
  getMovies,
  deleteMovie,
};
