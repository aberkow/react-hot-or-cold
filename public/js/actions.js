//actions/action creators (the functions) describe that something happened. But they don't actually do anything to state.
//thats the job of the reducers.

var fetch = require('isomorphic-fetch');

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

var FETCH_FEWEST_GUESS_SUCCESS = 'FETCH_FEWEST_GUESS_SUCCESS';
var fetchFewestGuessSuccess = function(fewestGuesses){
  return {
    type: FETCH_FEWEST_GUESS_SUCCESS,
    fewestGuesses: fewestGuesses
  };
};

var FETCH_FEWEST_GUESS_ERROR = 'FETCH_FEWEST_GUESS_ERROR';
var fetchFewestGuessError = function(fewestGuesses, error){
  return {
    type: FETCH_FEWEST_GUESS_ERROR,
    fewestGuesses: fewestGuesses,
    error: error
  };
};

var fetchFewestGuesses = function(fewestGuesses){
  return function(dispatch){
    var url = '/guesses';
    return fetch(url).then(function(response){
      if (response.state < 200 || response.status >= 300){
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response;
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      var fewestGuesses = data.fewestGuesses;
      return dispatch(fetchFewestGuessSuccess(fewestGuesses));
      })
    .catch(function(error){
      return dispatch(fetchFewestGuessError(fewestGuesses, error));
    });
  }
}

// var TOGGLE_MODAL = 'TOGGLE_MODAL';
// var toggleModal = function(displayStyle){
//   return {
//     type: TOGGLE_MODAL,
//     displayStyle: displayStyle
//   };
// };

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;

exports.OPEN_MODAL = OPEN_MODAL;
exports.openModal = openModal;

exports.CLOSE_MODAL = CLOSE_MODAL;
exports.closeModal = closeModal;

exports.FETCH_FEWEST_GUESS_SUCCESS = FETCH_FEWEST_GUESS_SUCCESS;
exports.fetchFewestGuessSuccess = fetchFewestGuessSuccess;

exports.FETCH_FEWEST_GUESS_ERROR = FETCH_FEWEST_GUESS_ERROR;
exports.fetchFewestGuessError = fetchFewestGuessError;

exports.fetchFewestGuesses = fetchFewestGuesses;

// exports.TOGGLE_MODAL = TOGGLE_MODAL;
// exports.toggleModal = toggleModal;



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
