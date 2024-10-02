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
const { requestLogger, errorLogger } = require('./middlewares/logger');

const options = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://movies-explorer.taashev92.ru',
    'https://www.movies-explorer.taashev92.ru',
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

// request logger
app.use(requestLogger);

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

// error logger
app.use(errorLogger);

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
