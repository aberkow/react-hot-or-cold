var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var port = process.env.PORT || 4000;

var fewestGuesses = function(){
  this.fewestGuesses = 500;
};

fewestGuesses.prototype.updateNumberOfGuesses = function(guessArray){
  this.fewestGuesses = guessArray.length;
};

var fewestGuesses = new fewestGuesses();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', express.static('public'));

app.get('/guesses', function(req, res){
  res.json({guesses: parseInt(fewestGuesses.fewestGuesses, 10)});
});

app.post('/guesses', function(req, res){
  var guess = fewestGuesses.updateNumberOfGuesses(req.body.fewestGuesses);
  res.status(201).json({guesses: parseInt(guess, 10)});
});

app.listen(port, function(){
  console.log('express listening on ' + port);
});

exports.app = app;
