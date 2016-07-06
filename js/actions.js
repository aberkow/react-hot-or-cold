//actions/action creators (the functions) describe that something happened. But they don't actually do anything to state.
//thats the job of the reducers.

var NEW_GAME = 'NEW_GAME';
var newGame = function(secretNumber){
  return {
    type: NEW_GAME,
    secretNumber: secretNumber
  };
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number){
  return {
    type: GUESS_NUMBER,
    number: number
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
  return {
    type: CLOSE_MODAL,
    show: false
  };
};

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;

exports.OPEN_MODAL = OPEN_MODAL;
exports.openModal = openModal;

exports.CLOSE_MODAL = CLOSE_MODAL;
exports.closeModal = closeModal;



// var GUESS_BUTTON_CLICK = 'GUESS_BUTTON_CLICK';
// var guessButtonClick = function(guessCounter, feedback){
//   type: GUESS_BUTTON_CLICK,
//   guessCounter: guessCounter,
//   feedback: feedback
// }

// export const NEW_GAME = 'NEW_GAME';
// export const newGame = function(secretNumber){
//   return {
//     type: NEW_GAME,
//     secretNumber: secretNumber
//   };
// };

// export const MODAL_STATE = 'MODAL_STATE';
// export const modalState = function(){
//   type: MODAL_STATE
// }

// exports.GUESS_BUTTON_CLICK;
// exports.guessButtonClick = guessButtonClick;
