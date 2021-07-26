import React, { Component } from 'react';

class Button extends Component  {
  render() {
    return (
        <span onClick={ this.props.button }>
            <button type="button" className="biz-btn"> {this.props.children} </button></span>
    );
  };
}

export default Button;