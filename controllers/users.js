const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET, NODE_ENV, SECRET_KEY } = require('../config');
const { messageErrors } = require('../utils/constants');
const NotFoundError = require('../components/NotFoundError');
const identifyError = require('../utils/identifyError');
const BadRequestError = require('../components/BadRequestError');

// create user
const createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) return next(new BadRequestError(messageErrors.badRequest));

  return bcrypt.hash(password, 10)
    .then((hash) => User.create({ name, email, password: hash }))
    .then((user) => res.status(201).send({ name: user.name, email: user.email }))
    .catch((err) => next(identifyError(
      /* error */ err,
      /* message */ err.code === 11000
        ? messageErrors.mailBusy
        : messageErrors.registrationUser,
    )));
};

// login
const login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next(new BadRequestError(messageErrors.badRequest));

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : SECRET_KEY,
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
    .catch((err) => next(identifyError(err)));
};

// logout
const logout = (req, res) => res.clearCookie('jwt', {
  maxAge: -1,
  httpOnly: true,
  sameSite: 'none',
  secure: true,
}).send({ message: messageErrors.bye });

// get user info
const getUserInfo = (req, res, next) => {
  const id = req.user._id;

  User.findById(id)
    .orFail(new NotFoundError(messageErrors.userNotFound))
    .then((user) => res.send(user))
    .catch((err) => next(identifyError(err)));
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
    .catch((err) => next(identifyError(
      /* error */ err,
      /* message */ err.code === 11000
        ? messageErrors.mailBusy
        : messageErrors.updateUser,
    )));
};

module.exports = {
  createUser,
  login,
  logout,
  getUserInfo,
  updateUser,
};
