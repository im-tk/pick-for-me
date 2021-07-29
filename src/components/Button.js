import React, { Component } from 'react';

class Button extends Component  {
  render() {
    return (
        <div id={this.props.id} className="biz-btn" onClick={ this.props.button }>
          {this.props.children}
        </div>
    );
  };
}

export default Button;