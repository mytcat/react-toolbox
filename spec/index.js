import React from 'react';
import ReactDOM,{render} from 'react-dom';
import Root from './root';
import Kmc409 from './kmc409_415';
import {_Kmc416,_Kmc417, _Kmc418, _Kmc419} from './task__kmc-416/index.js';
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
  kmc417 : function(){
    ReactDOM.render(<_Kmc417 />, document.getElementById('toolbox-test'));
  },
  kmc418 : function(){
    ReactDOM.render(<_Kmc418 />, document.getElementById('toolbox-test'));
  },
  kmc419 : function(){
    ReactDOM.render(<_Kmc419 />, document.getElementById('toolbox-test'));
  },
  container : function(){
    render(<ContainerMain />,_doc)
  }
}
