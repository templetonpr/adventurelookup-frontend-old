require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let logo = require('../images/logo.jpg');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={logo} alt="Adventure Lookup Logo" />
        <div className="notice">Everything seems to have started correctly.</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
