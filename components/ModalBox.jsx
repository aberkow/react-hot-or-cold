var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../js/actions');



//add function to show/hide the modal a la jquery show/hide
class ModalBox extends React.Component{
  constructor(props){
    super(props);
    console.log(props, 'from ModalBox');
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal(){
    var modal = document.getElementById('modal');
    if (this.props.modalState === true){
      modal.style.display = 'none';
    }
    this.props.dispatch(actions.closeModal());
  }
  render(){
    return(
      <div className='overlay' id='modal'>
        <div className='content'>
          <h3>What do I do?</h3>
          <div>
            <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
						<ul>
							<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
							<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
							<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
						</ul>
						<p>So, Are you ready?</p>
						<a onClick={this.closeModal} class="close" href="#">Got It!</a>
          </div>
        </div>
      </div>
    );
  }
}

var Container = connect()(ModalBox);

module.exports = Container;
