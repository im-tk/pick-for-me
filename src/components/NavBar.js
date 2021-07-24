import React, { Component } from 'react';

class NavBar extends Component  {
  constructor(props) {
    super(props); 
  }

  /* Renders the 'Back' and 'Next' buttons  */
  render() {
    return (
      <div className="navbar-container">
        <span onClick={ this.props.buttonBack }>
            <button className="navbar-button" type="button">Back</button></span>

        <span onClick={ this.props.buttonNext }>
            <button className="navbar-button" type="button">Next</button></span>
      </div>
    );
  };
}

export default NavBar;
