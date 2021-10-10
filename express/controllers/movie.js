const axios = require('axios');
const connection = require('../db/index');

exports.searchMovie = async (req, res, next) => {
  connection
    .query(
      `INSERT INTO logger (createdAt, endpoint, parameters) VALUES (NOW(), 'search', '${req.query.filmName}')`,
      (err, result) => {
        if (err) console.log(err);
        console.log('search...');
      }
    );
  
  try {
    const apiUrl = process.env.apiUrl;
    const apiToken = process.env.apiToken;
    const { filmName } = req.query;

    if (!filmName) {
      res.status(400).json({
        success: false,
        error: 'filmName is required.'
      });
    }

    const result = await axios.get(apiUrl, {
      params: {
        apikey: apiToken,
        s: filmName
      }
    });
    
    res.status(200).json({
      success: true,
      result: result.data
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.detailMovie = async (req, res, next) => {
  connection
    .query(
      `INSERT INTO logger (createdAt, endpoint, parameters) VALUES (NOW(), 'detail', '${req.params.id}')`,
      (err, result) => {
        if (err) console.log(err);
        console.log('detail...');
      }
    );
  
  try {
    const apiUrl = process.env.apiUrl;
    const apiToken = process.env.apiToken;
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        success: false,
        error: 'id is required.'
      });
    }

    const result = await axios.get(apiUrl, {
      params: {
        apikey: apiToken,
        i: id
      }
    });
    
    res.status(200).json({
      success: true,
      result: result.data
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
