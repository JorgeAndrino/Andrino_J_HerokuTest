var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pewdiepie Merch', message: "Welcome to the store!" });
});

// get a dynamic user via the router parameter
router.get('/:info', function(req, res, next) {
  console.log('info:', data[req.params.info]);
  res.render('infopage', data[req.params.info]);

});

module.exports = router;
