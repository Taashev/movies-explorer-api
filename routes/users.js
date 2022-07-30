const router = require('express').Router();
const { validationUpdateUser } = require('../utils/joiValidation');
const { getUserInfo, updateUser } = require('../controllers/users');

router.get('/me', getUserInfo);
router.patch('/me', validationUpdateUser, updateUser);

module.exports = router;
