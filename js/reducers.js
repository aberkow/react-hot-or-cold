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






// const gameState = [{
//   guessArray: [],
//   guessCounter: 0,
//   isModalOpen: false,
//   secretNumber: ''
// }]

// function gameReducer(state, action){
//   state = state || gameState;
//   // if (typeof state === 'undefined'){
//   //   return gameState;
//   // }
//   switch (action.type){
//     case NEW_GAME:
//       return state.concat({
//         guessArray: [],
//         guessCounter: 0,
//         isModalOpen: false,
//         secretNumber: action.secretNumber
//       });
//     case GUESS_NUMBER:
//
//       return state.concat({
//         guessArray: guess
//       });
//       // hotOrCold(userGuess, secretNumber);
//       //return state.guessCounter + 1;
//
//     case OPEN_MODAL:
//       return Object.assign({}, state, {
//         isModalOpen: true
//       });
//     case CLOSE_MODAL:
//       return Object.assign({}, state, {
//         isModalOpen: false
//       });
//     default:
//       return state;
//   }
//
// }
//
// //

// exports.gameReducer = gameReducer;

// var actions = require('./actions');
// //import { actions } from './actions';
//
// //const secretNumber = Math.floor(Math.random() * 100) + 1;
//
// const gameState = {
//   //secretNumber: Math.floor(Math.random() * 100) + 1,
//   guessArray: [],
//   guessCounter: null, //use guessArray.length as the guessCounter?
//   modalOpen: false
// }
//
// //trying to follow the pattern laid out in the redux docs.
// function gameReducer(state, action){
//   if (typeof state === 'undefined'){
//     return gameState;
//   }
//   switch (action.type){
//     case NEW_GAME:
//       return Object.assign({}, state, {
//         state.guessArray = [];
//         state.guessCounter = null;
//         state.modalOpen = false;
//       });
//   }
//     default:
//       return state;
// }
//
//
//
// // var gameState = {};
// // var gameState = {
// //   guessArray: [],
// //   //guessCounter: gameState.guessArray.length,
// //   secretNumber: ''
// // };
// // var secretNumber = '';
// // var guessArray = [];
//
//
//
//
//
// var gameReducer = function(state, action){
//   state = state || gameState;
//
//   //start the game - make sure guessCounter = 0, set secretNumber.
//   if (action.type === actions.NEW_GAME){
//     //maybe this should just reset the state.... It doesn't need to calculate anything. Just put everything back.
//
//     //random number generator
//     //this (calling Math.random()) should never occur in the reducer according to docs... So where does it go?
//     action.secretNumber = Math.floor(Math.random() * 100) + 1;
//     //clear the guessArray to reset it and the counter.
//     //state.guessArray.length = 0;
//     console.log('secretNumber ' + action.secretNumber, 'from NEW_GAME');
//     return state.secretNumber;
//   }
//
//   //play the game
//   else if (action.type === actions.GUESS_NUMBER){
//     console.log('no. ' + action.number, 'from GUESS_NUMBER');
//
//   //   var feedback = document.getElementById('feedback').innerHTML;
//   //
//   //   //form validation
//   //   if (isNaN(action.number) || (action.number < 1 || action.number > 100)){
//   //     console.log('Enter a number between 1 and 100');
//   //   }
//   //
//   //   //check to see if the guess wins the game
//   //   if (action.number === state.secretNumber) {
//   //     feedback = 'YOU WIN!!!';
//   //   }
//   //   else { //play the game.
//   //     var currentDifference = Math.abs(state.secretNumber - state.guessArray[state.guessArray.length]);
//   //     var previousDifference = Math.abs(state.secretNumber - state.guessArray[state.guessArray - 1]);
//   //
//   //     if (currentDifference === previousDifference) {
//   //       console.log('Please enter a different number');
//   //     }
//   //     else if (currentDifference > 50) {
//   //       feedback = 'Very cold!'
//   //     }
//   //     else if (currentDifference <= 50 && currentDifference > 30){
//   //       feedback = 'Cold';
//   //     }
//   //     else if (currentDifference <= 30 && currentDifference > 10) {
//   //       feedback = 'Hot';
//   //     }
//   //     else {
//   //       feedback = 'Very hot!';
//   //     }
//   //   }
//   //
//   //   //concat the guess to the guessArray
//   //   return state.guessArray.concat({
//   //     number: action.number
//   //   });
//   // }
//   // else if (action.type === actions.guessButtonClick) {
//   //   console.log('from GUESS_BUTTON_CLICK');
//   //
//   //
//    }
//   else if (action.type === actions.OPEN_MODAL) {
//     console.log('from OPEN_MODAL');
//   }
//   else if (action.type === actions.CLOSE_MODAL) {
//     console.log('from CLOSE_MODAL');
//   } else {
//     console.log('Something went wrong.');
//   }
//   //return state at the end.
//   return state;
// };
//
// exports.gameReducer = gameReducer;
//
//
// //state = state || guessArray;
// //   if (action.type === actions.GUESS_NUMBER){
// //     console.log('no. ' + action.number, 'from GUESS_NUMBER');
// //
// // /*
// // Logic to compare guess to secret number.
// //   */
// //     return state.concat({
// //       number: action.number
// //     });
// //   }
// // else if (action.type === actions.NEW_GAME){
// //   //1 - empty the guessArray
// //   //2 - Math.random.... to create/store newGame.secretNumber
// //   //3 - compare newGame.secretNumber = Math.random....
// //   console.log('from NEW_GAME');
// // }
//
// //1  - concat guess to guessArray;
//
//
// //2 - compare last index of array to gameState.secretNumber
// // 3- return comparison
//
//
// // return state.concat({
// //   number: action.number
// // });
