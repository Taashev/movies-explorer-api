// packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// my components
const router = require('./routes/index');
const handleErrors = require('./middlewares/handleErrors');
const notFound = require('./middlewares/notFound');

// express
const app = express();

// env
const { PORT, NODE_ENV, MONGODB } = process.env;

// mongodb
mongoose.connect(MONGODB);

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers
app.use(router);

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
