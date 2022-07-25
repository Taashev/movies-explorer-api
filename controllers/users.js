const User = require('../models/user');
const identifyError = require('../middlewares/identifyError');

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;

  User.create({ email, password, name })
    .then(() => res.send({
      name,
      email,
    }))
    .catch((err) => {
      next(identifyError(err));
    });
};

module.exports = {
  createUser,
};
