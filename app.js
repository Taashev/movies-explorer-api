const express = require('express');

const app = express();

const { PORT = 3000, NODE_ENV } = process.env;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log(NODE_ENV);

  if (NODE_ENV !== 'production') {
    console.log('Код запущен в режиме разработки');
  }
});
