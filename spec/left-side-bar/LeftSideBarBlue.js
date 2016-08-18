import React, {Component} from 'react';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';

import {themr} from 'react-css-themr';
import leftSideBar from './left-side-bar.scss';

const TooltipButton = Tooltip(Button);

const CSS_LEFT_SIDE_BAR_BLUE = 'leftSideBarBlue';
const CSS_LEFT_SIDE_BAR_DIVIDER = 'leftSideBar--divider';
const CSS_LEFT_SIDE_BAR_ICON = 'leftSideBarBlue--icon';
const CSS_KSI_LOGO = 'leftSideBarBlue--ksi_logo';
const CSS_KSI_LOGO_A = 'leftSideBarBlue--ksi_logo_a';

class LeftSideBarBlue extends Component {

  render(){
    let {theme} = this.props;
    return (
      <div className={theme[CSS_LEFT_SIDE_BAR_BLUE]}>
        <a href="#" className={theme[CSS_KSI_LOGO_A]}><img src="/ksi_logo"/></a>
        <div className={theme[CSS_LEFT_SIDE_BAR_DIVIDER]}></div>
        <Button className={theme[CSS_LEFT_SIDE_BAR_ICON]} icon="launch" floating/>
        <Button className={theme[CSS_LEFT_SIDE_BAR_ICON]} icon="build" floating/>
        <Button className={theme[CSS_LEFT_SIDE_BAR_ICON]} icon="track_changes" floating/>
        <Button className={theme[CSS_LEFT_SIDE_BAR_ICON]} icon="settings" floating/>
        <Button className={theme[CSS_LEFT_SIDE_BAR_ICON]} icon="help" floating/>
      </div>
    )
  }
}
const applyTheme = (Component)=>themr('leftSideBar', leftSideBar)(Component);
const ThemedLeftSideBarBlue = applyTheme(LeftSideBarBlue);
export {ThemedLeftSideBarBlue as LeftSideBarBlue};
