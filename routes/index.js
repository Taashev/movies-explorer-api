const router = require('express').Router();
const createUser = require('./createUser');

router.use('/', createUser);

module.exports = router;
