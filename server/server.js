const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/config');
const models = require('./db/index');
const routes = require('./routes/index');
const PORT = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(express.static(path.resolve(__dirname, '../public')))
  .use('/api', routes)

const server = app.listen(PORT, err => {
  if (err) {
    console.log(`Error connecting to server! ${err}`);
  } else {
    console.log('Successfully connected to server!');
  }
})
