const router = require('express').Router();
const auth = require('../middlewares/auth');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const users = require('./users');
const movies = require('./movies');

// request logger
router.use(requestLogger);

// auth
router.use(auth);

// users
router.use('/', users);

// movies
router.use('/', movies);

// error logger
router.use(errorLogger);

module.exports = router;
