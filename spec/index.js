import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Kmc409 from './kmc409';

window.app = {

spec: function(){
  ReactDOM.render(<Root />, document.getElementById('toolbox-test'));
},
  kmc409: function () {
    ReactDOM.render(<Kmc409 />, document.getElementById('toolbox-test'));
  }
}
