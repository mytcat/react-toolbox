import React, {Component} from 'react';
import {LeftSideBar} from '../left-side-bar/LeftSideBar';
import {_Kmc416} from '../task__kmc-416/index';
import style from '../style';
class ContainerMain extends Component {

  render(){

    return (
      <div className={style.app}>
        {/*  leftSideBar  */}
        <LeftSideBar />
        <_Kmc416 />
      </div>
    )
  }
}

export default ContainerMain;
