const mongoose = require('mongoose');
const validator = require('validator');

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
    validate: {
      validator(url) {
        validator.isUrl(url); //!! проверить что валидация на Url работает
      },
      message: 'Некорректный url адрес поля image',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        validator.isUrl(url); //!! проверить что валидация на Url работает
      },
      message: 'Некорректный url адрес поля image',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        validator.isUrl(url); //!! проверить что валидация на Url работает
      },
      message: 'Некорректный url адрес поля image',
    },
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
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', schemaMovie);