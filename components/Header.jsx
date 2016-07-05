import React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../js/actions';
import { openModal } from '../js/actions';
var actions = require('../js/actions');

//or maybe just var actions = require('../js/actions'); ?

class Header extends React.Component{
  constructor(){
    super();
    this.openModal = this.openModal.bind(this);
  }
  newGame(){

  }
  openModal(){
    this.props.dispatch(actions.openModal);
  }
  // newGame(){
  //   console.log(this.props.dispatch, 'from Header');
  //   this.props.dispatch(actions.newGame());
  // }
  render(){
    return(
      <div>
        <nav>
          <ul className='clearfix'>
            <li><a className='what' href='#' onClick={this.openModal}>What ?</a></li>
            <li><a className='new' href='#'>+ New Game</a></li>
          </ul>
        </nav>
        <h1>HOT or COLD</h1>
      </div>
    );
  }
}

var Container = connect()(Header);

export default Container;
