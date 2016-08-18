import React, {Component} from 'react';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';
import FontIcon from '../../components/font_icon';

import {themr} from 'react-css-themr';
import leftSideBar from './left-side-bar.scss';

const TooltipButton = Tooltip(Button);

const CSS_LEFT_SIDE_BAR = 'leftSideBar';
const CSS_LEFT_SIDE_BAR_DIVIDER = 'leftSideBar--divider';
const CSS_LEFT_SIDE_BAR_ICON = 'leftSideBar--icon';
class LeftSideBar extends Component {


  render(){
    let {theme} = this.props;
    return (
      <div className={theme[CSS_LEFT_SIDE_BAR]}>
        <FontIcon className={theme[CSS_LEFT_SIDE_BAR_ICON]} value="photo_camera"/>
        <div className={theme[CSS_LEFT_SIDE_BAR_DIVIDER]}></div>
        <FontIcon className={theme[CSS_LEFT_SIDE_BAR_ICON]} value="launch"/>
        <FontIcon className={theme[CSS_LEFT_SIDE_BAR_ICON]} value="build"/>
        <FontIcon className={theme[CSS_LEFT_SIDE_BAR_ICON]} value="track_changes"/>
        <FontIcon className={theme[CSS_LEFT_SIDE_BAR_ICON]} value="settings"/>
        <FontIcon className={theme[CSS_LEFT_SIDE_BAR_ICON]} value="help"/>
      </div>
    )
  }
}
const applyTheme = (Component)=>themr('leftSideBar', leftSideBar)(Component);
const ThemedLeftSideBar = applyTheme(LeftSideBar);
export {ThemedLeftSideBar as LeftSideBar};
