var actions = require('./actions');

var secretNumber = Math.floor(Math.random() * 100) + 1;

var initialGameState = {
  guessArray: [],
  userGuess: '',
  secretNumber: secretNumber,
  feedback: 'Make your Guess!',
  isModalOpen: false
};

var gameReducer = function(state, action){
  state = state || initialGameState;
  if (action.type === actions.NEW_GAME){
    console.log(state, 'from newGame reducer');
    return Object.assign({}, state, {
      secretNumber: action.secretNumber
    });
  }
  else if (action.type === actions.GUESS_NUMBER){
    var userGuess = action.number;
    var secretNumber = state.secretNumber;
    var guessArray = state.guessArray;

    console.log(userGuess, 'from actions.GUESS_NUMBER');
    var feedback = hotOrCold(userGuess, secretNumber, guessArray);

    var guessState = Object.assign({}, state, {
      userGuess: userGuess,
      guessArray: guessArray.concat(userGuess),
      feedback: feedback
    });
    console.log(guessState, 'from actions.GUESS_NUMBER');
    return guessState;
  }
  else if (action.type === actions.OPEN_MODAL){
    var modalState = Object.assign({}, state, {
      isModalOpen: action.show
    });
    return modalState;
  }
  else if (action.type === actions.CLOSE_MODAL){
    var modalState = Object.assign({}, state, {
      isModalOpen: action.show
    });
    return modalState;
  }
  else {
    console.log('I don\'t know that action');
  }
  return state;
}

//logic for the game. returns feedback to the player.
function hotOrCold(userGuess, secretNumber, guessArray){
  var feedback = document.getElementById('feedback').innerHTML;

  //form validation
  if (isNaN(userGuess) || (userGuess < 1 || userGuess > 100)){
    console.log('Enter a number between 1 and 100');
  }
  //check to see if the guess wins the game
  if (userGuess === secretNumber) {
    feedback = 'YOU WIN!!!';
  }
  else { //play the game.
    let currentDifference = Math.abs(secretNumber - guessArray[guessArray.length]);
    let previousDifference = Math.abs(secretNumber - guessArray[guessArray.length - 1]);

    if (currentDifference === previousDifference) {
      console.log('Please enter a different number');
    }
    else if (currentDifference > 50) {
      feedback = 'Very cold!';
    }
    else if (currentDifference <= 50 && currentDifference > 30){
      feedback = 'Cold';
    }
    else if (currentDifference <= 30 && currentDifference > 10) {
      feedback = 'Hot';
    }
    else {
      feedback = 'Very hot!';
    }
  }
  return feedback;
};

exports.gameReducer = gameReducer;