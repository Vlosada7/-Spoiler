const express = require('express');
const app = new express();
const cors = require('cors');
const PORT = 4000;
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
  } else {
    console.log(`🚀 Server (sessions) is listening on port ${PORT}!`); // eslint-disable-line no-console
  }
});

