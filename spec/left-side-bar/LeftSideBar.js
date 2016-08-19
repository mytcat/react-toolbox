import React, {Component} from 'react';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';
import FontIcon from '../../components/font_icon';

import {themr} from 'react-css-themr';
import leftSideBar from './left-side-bar.scss';
import {
  CSS_LEFT_SIDE_BAR_DIVIDER,
  CSS_LEFT_SIDE_BAR_ICON,
  CSS_KSI_LOGO_A,
  CSS_LEFT_SIDE_BAR,
  ICON_LAUNCH,
  ICON_BUILD,
  ICON_MY_LOCATION,
  ICON_SETTINGS,
  ICON_HELP,
  LOGO_SRC
} from './constants';
const TooltipButton = Tooltip(Button);


class LeftSideBar extends Component {
  render(){
    let {theme, leftSideBarColor} = this.props;
    return (
      <div className={theme[leftSideBarColor]}>
        <a href="#" className={theme[leftSideBarColor+CSS_KSI_LOGO_A]}><img src={LOGO_SRC}/></a>
        <div className={theme[leftSideBarColor+CSS_LEFT_SIDE_BAR_DIVIDER]}></div>
        <Button className={theme[leftSideBarColor+CSS_LEFT_SIDE_BAR_ICON]} icon={ICON_LAUNCH} floating/>
        <Button className={theme[leftSideBarColor+CSS_LEFT_SIDE_BAR_ICON]} icon={ICON_BUILD} floating/>
        <Button className={theme[leftSideBarColor+CSS_LEFT_SIDE_BAR_ICON]} icon={ICON_MY_LOCATION} floating/>
        <Button className={theme[leftSideBarColor+CSS_LEFT_SIDE_BAR_ICON]} icon={ICON_SETTINGS} floating/>
        <Button className={theme[leftSideBarColor+CSS_LEFT_SIDE_BAR_ICON]} icon={ICON_HELP} floating/>
      </div>
    )
  }
}
const applyTheme = (Component)=>themr(CSS_LEFT_SIDE_BAR, leftSideBar)(Component);
const ThemedLeftSideBar = applyTheme(LeftSideBar);
export {ThemedLeftSideBar as LeftSideBar};
