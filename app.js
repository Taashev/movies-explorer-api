// packages
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');
const limiter = require('./middlewares/limiter');
require('dotenv').config();

// my components
const router = require('./routes/index');
const handleErrors = require('./middlewares/handleErrors');

const options = {
  origin: [
    'localhost:3000',
    'localhost:3001',
    'http://localhost:3000',
    'http://localhost:3001',
    'movie.taashev.nomoredomains.xyz',
    'http://movie.taashev.nomoredomains.xyz',
    'https://movie.taashev.nomoredomains.xyz',
  ],
  credentials: true,
};

// express
const app = express();

// config
const { MONGO_URL, PORT } = require('./config');

// env
const { NODE_ENV } = process.env;

// mongodb
mongoose.connect(MONGO_URL);

// limiter
app.use(limiter);

// helmet
app.use(helmet());

// cors
app.use('*', cors(options));

// cookie parser
app.use(cookieParser());

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers
app.use(router);

// celebrate errors
app.use(errors());

// handle errors
app.use(handleErrors);

// start server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);

  if (NODE_ENV !== 'production') {
    console.log('Код запущен в режиме разработки');
  }
});
