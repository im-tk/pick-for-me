import React, { Component } from 'react';

class NavBar extends Component  {
  constructor(props) {
    super(props); 
  }

  /* Renders the 'Back' and 'Next' buttons  */
  render() {
    return (
      <div className="navbar-container">
        <span 
          className="navbar-button"
          onClick={ this.props.buttonBack }>
            <button type="button">Back</button></span>

        <span 
          className="navbar-button" 
          onClick={ this.props.buttonNext }>
            <button type="button">Next</button></span>
      </div>
    );
  };
}

export default NavBar;
