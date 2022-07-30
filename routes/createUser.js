const router = require('express').Router();
const { validationCreateUser } = require('../utils/joiValidation');
const { createUser } = require('../controllers/users');

router.post('/', validationCreateUser, createUser);

module.exports = router;
