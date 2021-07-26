import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="header-container">
          <h1>{this.props.children}</h1>
        </div>
    );
  }
};

export default Header;

/**
 * 

      <div className="footer">
          <span>created by <a href="http://github.com/im-tk" target="_window">@im-tk</a></span>
      </div>

 * 
 * 
 */