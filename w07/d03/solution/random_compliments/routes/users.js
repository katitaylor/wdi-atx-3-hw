var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var name = req.query.name;

  res.send('Hi, I am ' + name);
});

router.get('/:name', function(req, res, next) {
  var name = req.params.name;

  res.send('Named parameter: ' + name);
});


router.get('/new', function(req, res, next) {
  res.render('users/new');
});

router.post('/', function(req, res, next) {
  var name = req.body.name;
  var favorite = req.body.favorite;

  res.send('Hi, my name is ' + name + ' and ' + favorite + ' is my favorite');
});



module.exports = router;
