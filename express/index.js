require('./config');
// use const because later we dont want this variable changes
const express = require('express');
// invoke the express variable so we can start the project
const app = express();
// define the port
const port = process.env.port || 3000;

// use bodyparser to get req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import router and use that route
const movieRoutes = require('./routes/movie');
// this will be define the route of the app
app.use('/', movieRoutes);

// express will run with port that we use
app.listen(port, () => {
  console.log('listening on port', port);
});
