import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p id="created-by">
          created by <a className="link" href="http://github.com/im-tk" target="_window">@im-tk</a>
        </p>
      </div>
    );
  }
};

export default Footer;