//actions/action creators (the functions) describe that something happened. But they don't actually do anything to state.
//thats the job of the reducers.

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = function(number){
  return {
    type: GUESS_NUMBER,
    number: number
  };
};

export const NEW_GAME = 'NEW_GAME';
export const newGame = function(){
  return {
    type: NEW_GAME
  };
};

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

export const OPEN_MODAL = 'OPEN_MODAL';
export const openModal = function(){
  return {
    type: OPEN_MODAL,
    show: true
  };
};

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = function(){
  return {
    type: CLOSE_MODAL,
    show: false
  };
};

// exports.GUESS_NUMBER = GUESS_NUMBER;
// exports.guessNumber = guessNumber;

// exports.GUESS_BUTTON_CLICK;
// exports.guessButtonClick = guessButtonClick;

// exports.NEW_GAME = NEW_GAME;
// exports.newGame = newGame;
//
// exports.OPEN_MODAL = OPEN_MODAL;
// exports.openModal = openModal;
//
// exports.CLOSE_MODAL = CLOSE_MODAL;
// exports.closeModal = closeModal;
