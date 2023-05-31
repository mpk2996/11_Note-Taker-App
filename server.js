const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const api = require('./routes/index.js');

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.use('/', api);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);