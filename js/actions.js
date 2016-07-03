var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number){
  return {
    type: GUESS_NUMBER,
    number: number
  };
};

// var GUESS_BUTTON_CLICK = 'GUESS_BUTTON_CLICK';
// var guessButtonClick = function(numberOfGuesses){
//   type: GUESS_BUTTON_CLICK,
//   numberOfGuesses: numberOfGuesses
// }

var NEW_GAME = 'NEW_GAME';
var newGame = function(secretNumber){
  return {
    type: NEW_GAME,
    secretNumber: secretNumber
  };
};

var OPEN_MODAL = 'OPEN_MODAL';
var openModal = function(){
  return {
    type: OPEN_MODAL,
    show: true
  };
};

var CLOSE_MODAL = 'CLOSE_MODAL';
var closeModal = function(){
  return{
    type: CLOSE_MODAL,
    show: false
  };
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;

// exports.GUESS_BUTTON_CLICK;
// exports.guessButtonClick = guessButtonClick;

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.OPEN_MODAL = OPEN_MODAL;
exports.openModal = openModal;

exports.CLOSE_MODAL = CLOSE_MODAL;
exports.closeModal = closeModal;
