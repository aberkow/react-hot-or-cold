import React from 'react';
import ReactDOM from 'react-dom';
var Provider = require('react-redux').Provider;

import store from './js/store';
import Game from './components/Game';

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById('app')
  );
});


// import GameForm from './components/GameForm';
// import GuessCountAndList from './components/GuessCountAndList';
// import Header from './components/Header';

//import actions from './js/actions';


// class Provider extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (
//       <Game />
//     );
//   }
// }

// var secretNumber = Math.floor(Math.random() * 100) + 1;

// class Game extends React.Component{
//   constructor(props){
//     super(props);
//   }
//
//   componentWillMount(){
//     //this.props.dispatch(actions.newGame(this.props.secretNumber));
//   }
//   newGame(){
//     this.props.dispatch(actions.newGame());
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2 id='feedback'>Make your Guess!</h2>
//         <GameForm />
//         <GuessCountAndList />
//       </div>
//     );
//   }
// }



// class Header extends React.Component{
//   constructor(){
//     super();
//   }
//   render(){
//     return(
//       <div>
//         <nav>
//           <ul className='clearfix'>
//             <li><a className='what' href='#'>What ?</a></li>
//             <li><a className='new' href='#'>+ New Game</a></li>
//           </ul>
//         </nav>
//         <h1>HOT or COLD</h1>
//       </div>
//     );
//   }
// }

// class ModalBox extends React.Component{
//   constructor(){
//     super();
//   }
//   render(){
//     return(
//       <div className='overlay' id='modal'>
//         <div className='content'>
//           <h3>What do I do?</h3>
//           <div>
//             <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
// 						<ul>
// 							<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
// 							<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
// 							<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
// 						</ul>
// 						<p>So, Are you ready?</p>
// 						<a class="close" href="#">Got It!</a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class GameForm extends React.Component{
//   constructor(props){
//     super(props);
//   }
//
//   guessButtonClick: function(evt){
//     evt.preventDefault();
//   }
//
//   render(){
//     return(
//       <div>
//         <form>
//           <input type='text' name='userGuess' id='userGuess' className='text' maxLength='3' autoComplete='off' placeholder='Enter your Guess' />
//           <input type='submit' id='guessButton' className='button' name='submit' value='Guess' />
//         </form>
//       </div>
//     );
//   }
// }

// class GuessCountAndList extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <p>Guess #<span id='count'>0</span>!</p>
//         <ul id='guessList' className='guessBox clearfix'>
//
//         </ul>
//       </div>
//     );
//   }
// }
