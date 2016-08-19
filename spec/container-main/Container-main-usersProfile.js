import React, {Component} from 'react';
import {LeftSideBar} from '../left-side-bar/LeftSideBar';
import {TopBar} from '../custom-components/topbar.js';
import {_Kmc416, _Kmc417, _Kmc418 , _Kmc419, _Kmc420, _Kmc421} from '../task__kmc-416/index';
import {
  CSS_LEFT_SIDE_BAR_COLOR_BLUE
} from '../left-side-bar/constants';
import {TASK_KMC_ID} from '../task__kmc-416/constants';
import {themr} from 'react-css-themr';
import theme from '../task__kmc-416/theme.scss';
import style from '../style';
import {ProfileUsersContainer} from '../profile-users/profileUsers';


class ContainerMainUserProfile extends Component {
  render(){
    let st = {
      padding: '30px 80px',
      marginLeft: '90px'
    };
    return (
      <div >
        <TopBar />
        <LeftSideBar leftSideBarColor={CSS_LEFT_SIDE_BAR_COLOR_BLUE}/>
        <div style={st}>
          <ProfileUsersContainer />
        </div>
      </div>
    )
  }
}

const applyTheme = (Component)=>themr(TASK_KMC_ID, theme)(Component);
const ThemedContainerMain = applyTheme(ContainerMainUserProfile);
export {ThemedContainerMain as ContainerMainUserProfile};
