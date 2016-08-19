import React from 'react';

import {
  USER_LOGO,
  CSS_PROFILE_USER_CREATE_BUTTON,
  CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK,
  ICON_CREATE,
  ICON_DONE,
  ICON_CLOSE
} from './constants';
import Button from '../../components/button';

const ProfileUsersHeaderBlock = ({theme, editable, saveOrCloseHandler, toggleHandler}) => {

  const renderIconBlock = () =>{
    let _props = {
      floating: true,
      onClick: toggleHandler,
      className : theme[CSS_PROFILE_USER_CREATE_BUTTON]
    };
    if(!editable){
      _props = Object.assign(_props, {icon : ICON_CREATE});
      return (
        <div className={theme[CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK]}>
          {renderButtonIcon(_props)}
        </div>
      )
    } else {
      return (
        <div className={theme[CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK]}>
          {renderButtonIcon(Object.assign(_props, {icon : ICON_DONE, onClick : (e)=>saveOrCloseHandler(true)}))}
          {renderButtonIcon(Object.assign(_props, {icon : ICON_CLOSE, onClick : (e)=>saveOrCloseHandler(false)}))}
        </div>
      )
    }
  };

  const renderButtonIcon = (props) => {
    return (
      <Button {...props}/>
    )
  };

  return renderIconBlock();
};

export {ProfileUsersHeaderBlock}
