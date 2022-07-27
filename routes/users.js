const router = require('express').Router();
const {
  validationCreateUser,
  validationLoginUser,
  validationUpdateUser,
} = require('../utils/joiValidation');
const {
  createUser,
  login,
  logout,
  getUserInfo,
  updateUser,
} = require('../controllers/users');

router.post('/signup', validationCreateUser, createUser);
router.post('/signin', validationLoginUser, login);
router.get('/users/me', getUserInfo);
router.patch('/users/me', validationUpdateUser, updateUser);
router.get('/signout', logout);

module.exports = router;
