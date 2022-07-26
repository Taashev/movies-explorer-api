const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { errorMessages } = require('../utils/constants');
const NotFoundError = require('../components/NotFoundError');

// create user
const createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({ name, email, password: hash }))
    .then((user) => res.status(201).send({ name: user.name, email: user.email }))
    .catch(next);
};

// login
const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        'secret-key',
        { expiresIn: '7d' },
      );

      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      }).send({
        name: user.name,
        email: user.email,
        _id: user._id,
      });
    })
    .catch(next);
};

// logout
const logout = (req, res) => res.clearCookie('jwt', '').send({ message: 'Покасиси!' });

// get user info
const getUserInfo = (req, res, next) => {
  const id = req.user._id;

  User.findById(id)
    .orFail(new NotFoundError(errorMessages.userNotFound))
    .then((user) => res.send(user))
    .catch(next);
};

// update user
const updateUser = (req, res, next) => {
  const id = req.user._id;
  const { name, email } = req.body;

  User.findByIdAndUpdate(
    id,
    { name, email },
    { new: true, runValidators: true },
  )
    .then((user) => res.send(user))
    .catch(next);
};

module.exports = {
  createUser,
  login,
  logout,
  getUserInfo,
  updateUser,
};
