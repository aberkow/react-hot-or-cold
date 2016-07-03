var actions = require('./actions');

var gameState = {
  guessArray: [],
  guessCounter: gameState.guessArray.length,
  secretNumber: ''
};
// var secretNumber = '';
// var guessArray = [];

var gameReducer = function(state, action){
  state = state || gameState;

  //start the game - make sure guessCounter = 0, set secretNumber.
  if (action.type === actions.NEW_GAME){
    //random number generator
    action.secretNumber = Math.floor(Math.random() * 100) + 1;
    //clear the guessArray to reset it and the counter.
    state.guessArray.length = 0;
    console.log('secretNumber ' + action.secretNumber, 'from NEW_GAME');
    return state.secretNumber;
  }

  //play the game
  else if (action.type === actions.GUESS_NUMBER){
    console.log('no. ' + action.number, 'from GUESS_NUMBER');

    var feedback = document.getElementById('feedback').innerHTML;

    //form validation
    if (isNaN(action.number) || (action.number < 1 || action.number > 100)){
      console.log('Enter a number between 1 and 100');
    }

    //check to see if the guess wins the game
    if (action.number === state.secretNumber) {
      feedback = 'YOU WIN!!!';
    }
    else { //play the game.
      var currentDifference = Math.abs(state.secretNumber - state.guessArray[state.guessArray.length]);
      var previousDifference = Math.abs(state.secretNumber - state.guessArray[state.guessArray - 1]);

      if (currentDifference === previousDifference) {
        console.log('Please enter a different number');
      }
      else if (currentDifference > 50) {
        feedback = 'Very cold!'
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

    //concat the guess to the guessArray
    return state.guessArray.concat({
      number: action.number
    });
  }
  // else if (action.type === actions.guessButtonClick) {
  //   console.log('from GUESS_BUTTON_CLICK');
  //
  //
  // }
  else if (action.type === actions.OPEN_MODAL) {
    console.log('from OPEN_MODAL');
  }
  else if (action.type === actions.CLOSE_MODAL) {
    console.log('from CLOSE_MODAL');
  } else {
    console.log('Something went wrong.');
  }
  //return state at the end.
  return state;
};

exports.gameReducer = gameReducer;


//state = state || guessArray;
//   if (action.type === actions.GUESS_NUMBER){
//     console.log('no. ' + action.number, 'from GUESS_NUMBER');
//
// /*
// Logic to compare guess to secret number.
//   */
//     return state.concat({
//       number: action.number
//     });
//   }
// else if (action.type === actions.NEW_GAME){
//   //1 - empty the guessArray
//   //2 - Math.random.... to create/store newGame.secretNumber
//   //3 - compare newGame.secretNumber = Math.random....
//   console.log('from NEW_GAME');
// }

//1  - concat guess to guessArray;


//2 - compare last index of array to gameState.secretNumber
// 3- return comparison


// return state.concat({
//   number: action.number
// });
