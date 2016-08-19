import React, {Component} from 'react';
import {LeftSideBar} from '../left-side-bar/LeftSideBar';
import {TopBar} from '../custom-components/topbar.js';
import {_Kmc416} from '../task__kmc-416/index';
import style from '../style';
import {
  CSS_LEFT_SIDE_BAR,
  CSS_LEFT_SIDE_BAR_COLOR_BLUE
} from '../left-side-bar/constants';

class ContainerMain extends Component {

  render(){
    return (
      <div>
        <TopBar />
        <LeftSideBar leftSideBarColor={CSS_LEFT_SIDE_BAR_COLOR_BLUE}/>
        <_Kmc416 />
      </div>
    )
  }
}

export default ContainerMain;
