import React from 'react';
import ReactDOM,{render} from 'react-dom';
import Root from './root';
import Kmc409 from './kmc409';
import {_Kmc416} from './task__kmc-416/index.js';
import ContainerMain from './container-main/Container-main';

const _doc = document.getElementById('toolbox-test');
window.app = {

spec: function(){
  ReactDOM.render(<Root />, document.getElementById('toolbox-test'));
},
  kmc409: function () {
    ReactDOM.render(<Kmc409 />, document.getElementById('toolbox-test'));
  },
  kmc416 : function(){
    ReactDOM.render(<_Kmc416 />, document.getElementById('toolbox-test'));
  },
  container : function(){
    render(<ContainerMain />,_doc)
  }
}
