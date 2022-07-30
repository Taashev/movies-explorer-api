const router = require('express').Router();
const { validationLoginUser } = require('../utils/joiValidation');
const { login } = require('../controllers/users');

router.post('/', validationLoginUser, login);

module.exports = router;
