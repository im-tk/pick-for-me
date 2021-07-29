import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="header-container">
          <span>{this.props.children}</span>
        </div>
    );
  }
};

export default Header;