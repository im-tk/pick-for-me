import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
          <span>
            <a href="https://github.com/im-tk/pick-for-me" target="_blank" rel="noopener noreferrer"><b>pick for me</b></a>
            {' '}
            created by 
            {' '}
            <a href="http://github.com/im-tk" target="_blank" rel="noopener noreferrer"><b>@im-tk</b></a>
          </span>
      </div>
    );
  }
};

export default Footer;