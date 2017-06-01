var express = require('express');
var router = express.Router();

router.post('/result', function(req, res, next) {
	res.render('result',{
		title: 'Express-result',
		id: req.body.id,
		name: req.body.name
	});
});
module.exports = router;