var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pewdiepie Merch', message: "Welcome to the store!" });
});

// get a dynamic user via the router parameter
router.get('/:user', function(req, res, next) {
  console.log('user:', data[req.params.user]);
  res.render('infopage', data[req.params.user]);
});

module.exports = router;
