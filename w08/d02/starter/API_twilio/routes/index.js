var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
	// Twilio Credentials

var accountSid = 'AC8bcf44e7dd9ba19f2920ec3c2e3ed925';
var authToken = '0d2fb52f52ba55c2a799a6397d52c347';
var recipient = req.body.to;
var textMessage = req.body.message;
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: recipient,
  from: "+12017442342",
  body: "hello",
}, function(err, message) {
  console.log(message.sid);
});
});

module.exports = router;
