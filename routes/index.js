const router = require('express').Router();
const auth = require('../middlewares/auth');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const createUser = require('./createUser');
const login = require('./login');
const logout = require('./logout');
const users = require('./users');
const movies = require('./movies');

// request logger
router.use(requestLogger);

// create user
router.use('/signup', createUser);

// login
router.use('/signin', login);

// auth
router.use(auth);

// users
router.use('/users', users);

// movies
router.use('/movies', movies);

// logout
router.use('/signout', logout);

// error logger
router.use(errorLogger);

module.exports = router;
