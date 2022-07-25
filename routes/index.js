const router = require('express').Router();
const auth = require('../middlewares/auth');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const createUser = require('./createUser');
const login = require('./login');
const users = require('./users');

// request logger
router.use(requestLogger);

// signup
router.use('/', createUser);

// singin
router.use('/', login);

// auth
router.use(auth);

// users
router.use('/users', users);

// error logger
router.use(errorLogger);

module.exports = router;
