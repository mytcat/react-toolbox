import React, {Component} from 'react';
import {LeftSideBar} from '../left-side-bar/LeftSideBar';
import {TopBar} from '../custom-components/topbar';
import {_Kmc416} from '../task__kmc-416/index';
import style from '../style';
class ContainerMain extends Component {

  render(){

    return (
      <div>
        {/*  leftSideBar  */}
        <TopBar />
        <LeftSideBar />
        <_Kmc416 />
      </div>
    )
  }
}

export default ContainerMain;
