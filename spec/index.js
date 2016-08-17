import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Kmc409 from './kmc409';

import Kmc416 from './kmc416.js';

window.app = {

spec: function(){
  ReactDOM.render(<Root />, document.getElementById('toolbox-test'));
},
  kmc409: function () {
    ReactDOM.render(<Kmc409 />, document.getElementById('toolbox-test'));
  },
  kmc416 : function(){
    ReactDOM.render(<Kmc416 />, document.getElementById('toolbox-test'));
  }
}
