const mongoose = require('mongoose');
const {
  regexUrl,
  regexRU,
  regexEN,
} = require('../utils/constants');

const schemaMovie = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    match: regexUrl,
  },
  trailerLink: {
    type: String,
    required: true,
    match: regexUrl,
  },
  thumbnail: {
    type: String,
    required: true,
    match: regexUrl,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    match: regexRU,
  },
  nameEN: {
    type: String,
    required: true,
    match: regexEN,
  },
});

module.exports = mongoose.model('movie', schemaMovie);
