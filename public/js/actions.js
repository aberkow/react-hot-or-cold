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

var POST_NUMBER_OF_GUESSES = 'POST_NUMBER_OF_GUESSES';
var postNumberOfGuesses = function(numberOfGuesses){
    return {
    type: POST_NUMBER_OF_GUESSES,
    numberOfGuesses: numberOfGuesses
  }
}

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
      console.log(data, 'from fetchFewestGuesses()');
      var fewestGuesses = data.fewestGuesses;
      return dispatch(fetchFewestGuessSuccess(fewestGuesses));
      })
    .catch(function(error){
      return dispatch(fetchFewestGuessError(fewestGuesses, error));
    });
  }
}

var numberOfGuessesToServer = function(numberOfGuesses){
  return function(dispatch){
    var url = '/guesses';
    dispatch(postNumberOfGuesses(numberOfGuesses));
    fetch(url, {
      method: 'post',
      body: JSON.stringify({
        numberOfGuesses
      })
    })
    .then(function(data){
      console.log(data, 'from numberOfGuessesToServer');
      // var fewestGuesses = data.fewestGuesses
    })
    .catch(function(error){
      throw new Error('something went wrong in numberOfGuessesToServer');
    });
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

exports.POST_NUMBER_OF_GUESSES = POST_NUMBER_OF_GUESSES;
exports.postNumberOfGuesses = postNumberOfGuesses;

exports.fetchFewestGuesses = fetchFewestGuesses;
exports.numberOfGuessesToServer = numberOfGuessesToServer;
