var express = require('express');
var router = express.Router();
var random = require("node-random");

var compliments = [ "Patience is a virtue",
  "Practice makes perfect",
  "Nothin' but pearly whites!",
  "You got this!",
  "Everyone has a plan, until they get punched in the mouth.",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "Get back on the horse!"];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

router.get('/', function(req, res, next) {

var randomValue = compliments[Math.floor(Math.random() * compliments.length)];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
res.render('index', { title: 'Compliment Express!', compliments: randomValue, colors: randomColor });
});




// });


// /routes/users.js
// router.get('/new', function(req, res, next) {
//     res.render('users/new');
// });

module.exports = router;

//
// https://www.npmjs.com/package/node-random
// random.strings({
//     "length": 1,
//     "number": 20,
//     "upper": false,
//     "digits": false
// }, function(error, data) {
//    if (error) throw error;
//    console.log(data.join(" and "));
// });


 // colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

