import React, { Component } from 'react';

class Button extends Component  {
  constructor(props) {
    super(props); 
  }

  /* Renders the 'Back' and 'Next' buttons  */
  render() {
    return (
        <span onClick={ this.props.button }>
            <button type="button" className="nav-btn"> {this.props.children} </button></span>
    );
  };
}

export default Button;

/*
        <span onClick={ this.props.buttonNext }>
            <button className="navbar-btn" type="button">Next</button></span>
      </div>

*/