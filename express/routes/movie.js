const express = require('express');
const routes = express();
const { searchMovie, detailMovie } = require('../controllers/movie');

routes.get('/search', searchMovie);
routes.get('/detail/:id', detailMovie);

module.exports = routes;
