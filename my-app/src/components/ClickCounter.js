import React, { Component } from 'react';


class ClickCounter extends Component {
	
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  
  handleClick() {
	this.setState(prevState => ({
      counter: prevState.counter+1
    }));
  };
  
  render() {
    return (
      <div> <button onClick={this.handleClick.bind(this)}> click </button> <div className='txt' > count = {this.state.counter} </div> </div>
    );
  }
}

export default ClickCounter;
