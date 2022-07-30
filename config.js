const PORT_DEFAULT = 3000;
const MONGO_DEFAULT_URL = 'mongodb://localhost:27017/moviesdb';

const PORT = process.env.PORT || PORT_DEFAULT;
const MONGO_URL = process.env.MONGODB || MONGO_DEFAULT_URL;
const SECRET_KEY = 'secret-key';
const { JWT_SECRET, NODE_ENV } = process.env;

module.exports = {
  PORT,
  MONGO_URL,
  SECRET_KEY,
  NODE_ENV,
  JWT_SECRET,
};
