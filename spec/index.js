import React from 'react';
import ReactDOM,{render} from 'react-dom';
import Root from './root';
import {_Kmc409_415} from './kmc409_415';
import {_Kmc427} from './task__kmc-427/index.js';
import {_Kmc416,_Kmc417, _Kmc418, _Kmc419, _Kmc420, _Kmc421} from './task__kmc-416/index.js';
import {ContainerMain} from './container-main/Container-main';
import {ProfileUsersContainer} from './profile-users/profileUsers';
import {ContainerMainUserProfile} from './container-main/Container-main-usersProfile';
import {AdminOrganizer} from './admin_organaizer/adminOrganaizer';
import {ContainerAdminOrganizer} from './container-main/Container-main-adminOrganizer';

const _doc = document.getElementById('toolbox-test');
window.app = {

spec: function(){
  ReactDOM.render(<Root />, document.getElementById('toolbox-test'));
},
  kmc409: function () {
    ReactDOM.render(<_Kmc409_415 />, document.getElementById('toolbox-test'));
  },
  kmc427: function () {
    ReactDOM.render(<_Kmc427 />, document.getElementById('toolbox-test'));
  },
  kmc416 : function(){
    ReactDOM.render(<_Kmc416 />, _doc);
  },
  kmc417 : function(){
    ReactDOM.render(<_Kmc417 />, _doc);
  },
  kmc418 : function(){
    ReactDOM.render(<_Kmc418 />, _doc);
  },
  kmc419 : function(){
    ReactDOM.render(<_Kmc419 />, _doc);
  },
  kmc420 : function(){
    ReactDOM.render(<_Kmc420 />, _doc);
  },
  kmc421 : function(){
    ReactDOM.render(<_Kmc421 />, _doc);
  },
  profileUsers : function(){
    ReactDOM.render(<ProfileUsersContainer />, _doc);
  },
  adminOrganizer : function(){
    ReactDOM.render(<AdminOrganizer />, _doc);
  },
  container : function(){
    render(<ContainerMain />,_doc)
  },
  kmc424 : function(){
    render(<ContainerMainUserProfile />, _doc)
  },
  kmc428 : function(){
    render(<ContainerAdminOrganizer />, _doc)
  }
}
