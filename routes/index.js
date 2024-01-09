var express = require('express');
var router = express.Router();

// GET

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page' });
});

module.exports = router;
