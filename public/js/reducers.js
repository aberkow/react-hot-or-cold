var actions = require('./actions');

var secretNumber = Math.floor(Math.random() * 100) + 1;

var initialGameState = {
  guessArray: [],
  userGuess: '',
  fewestGuesses: 500,
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
    var feedback = hotOrCold(userGuess, secretNumber, guessArray + 1);

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
  else if (action.type === actions.FETCH_FEWEST_GUESS_SUCCESS) {
    return Object.assign({}, state, {fewestGuesses: action.fewestGuesses});
  }
  else if (action.type === actions.FETCH_FEWEST_GUESS_ERROR) {
    throw new Error('The game broke');
  }
  else {
    console.log('I don\'t know that action');
  }
  return state;
}

//logic for the game. returns feedback to the player.
function hotOrCold(userGuess, secretNumber, guessArray){
  var userGuess = parseInt(userGuess, 10);
  var feedback;
  //form validation
  if (isNaN(userGuess) || (userGuess < 1 || userGuess > 100)){
    console.log('Enter a number between 1 and 100');
  }
  //check to see if the guess wins the game
  if (userGuess == secretNumber) {
    feedback = 'YOU WIN!!!';

  }
  else { //play the game.
    var currentDifference = Math.abs(secretNumber - userGuess);
    var previousDifference = Math.abs(secretNumber - parseInt(guessArray[guessArray.length - 1], 10));

    if (currentDifference == previousDifference) {
      console.log('Please enter a different number');
    }
    else if (currentDifference > 50) {
      feedback = 'Very cold!';
      debugger;
    }
    else if (currentDifference <= 50 && currentDifference > 30){
      feedback = 'Cold';

    }
    else if (currentDifference <= 30 && currentDifference > 10) {
      feedback = 'Hot';

    }
    else {
      feedback = 'Very hot!';
      debugger;
    }
  }
  return feedback;
};

exports.gameReducer = gameReducer;
