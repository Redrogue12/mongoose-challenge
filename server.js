const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const {DATABASE_URL, PORT} = require('./config');
const {Blog} = require('./models');

const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

app.get('/posts', (req, res) => {
  Blog
    .find()
    .exec()
    .then(post => {
      res.json(posts.map(post => post.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went horribly wrong'});
    });
});
