const mysql = require('mysql2');

connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.username,
  database: process.env.database,
  password: process.env.password
});

module.exports = connection;
