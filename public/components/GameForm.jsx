var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../js/actions');

class GameForm extends React.Component{
  constructor(props){
    super(props);
    this.submitGuess = this.submitGuess.bind(this);
  }

  submitGuess(evt){
    evt.preventDefault();
    //get the value of the input box
    var userGuess = this.refs.userGuess.value;
    //pass userGuess into the guessNumber action.
    this.props.dispatch(actions.guessNumber(userGuess));
    this.refs.userGuess.value = '';
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submitGuess}>
          <input ref='userGuess' type='text' name='userGuess' id='userGuess' className='text' maxLength='3' autoComplete='off' placeholder='Enter your Guess' />
          <input type='submit' id='guessButton' className='button' name='submit' value='Guess' />
        </form>
      </div>
    );
  }
}

var Container = connect()(GameForm);
module.exports = Container;
