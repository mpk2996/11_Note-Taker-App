const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const api = require('./routes/index.js');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.use('/', api);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port} 🚀`);
});