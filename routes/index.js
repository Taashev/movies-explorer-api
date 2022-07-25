const router = require('express').Router();
const createUser = require('./createUser');
const login = require('./login');
const users = require('./users');

router.use('/', createUser);
router.use('/', login);
router.use('/users', users);

module.exports = router;
