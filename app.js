// packages
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const limiter = require('./middlewares/limiter');
require('dotenv').config();

// my components
const router = require('./routes/index');
const handleErrors = require('./middlewares/handleErrors');
const notFound = require('./middlewares/notFound');

// express
const app = express();

// env
const {
  PORT = 3000,
  NODE_ENV,
  MONGODB = 'mongodb://localhost:27017/moviesdb',
} = process.env;

// mongodb
mongoose.connect(MONGODB);

// limiter
app.use(limiter);

// helmet
app.use(helmet());

// cookie parser
app.use(cookieParser());

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers
app.use(router);

// celebrate errors
app.use(errors());

// not found error
app.use('*', notFound);

// handle errors
app.use(handleErrors);

// start server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);

  if (NODE_ENV !== 'production') {
    console.log('Код запущен в режиме разработки');
  }
});
