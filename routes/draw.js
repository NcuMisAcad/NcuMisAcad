var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('draw', { title: 'Express-searching' });
});

module.exports = router;
