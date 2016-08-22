import React from 'react';
import {CardTitle} from '../../components/card';
import {Avatar} from '../../components/avatar';
import Button from '../../components/button';
import Input from '../../components/input';
import FontIcon from '../../components/font_icon';

import {
  CSS_PROFILE_USER,
  CSS_PROFILE_USER_CREATE_BUTTON,
  CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK,
  ICON_CREATE,
  ICON_DONE,
  ICON_CLOSE,
  CSS_PROFILE_USER_AVATAR_EDIT,
  CSS_PROFILE_USER_CARD_EDIT,
  CSS_PROFILE_USER_INPUT_TITLE_EDIT
} from './constants';
const ProfileUsersHeaderBlock = (
  {
    theme,
    editable,
    saveOrCloseHandler,
    toggleHandler,
    userName,
    userLogo,
    parrentHandler
  }
  ) => {
  const renderIconBlock = () =>{
    let _props = {
      floating: true,
      onClick: toggleHandler,
      className : theme[CSS_PROFILE_USER_CREATE_BUTTON]
    };
    if(!editable){
      _props = Object.assign(_props, {icon : ICON_CREATE, key: ICON_CREATE});
      return (
        <div className={theme[CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK]}>
          {renderButtonIcon(_props)}
        </div>
      )
    } else {
      return (
        <div className={theme[CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK]}>
          {renderButtonIcon(Object.assign(_props, {icon : ICON_DONE, key: ICON_DONE,onClick : (e)=>saveOrCloseHandler(true)}))}
          {renderButtonIcon(Object.assign(_props, {icon : ICON_CLOSE, key: ICON_CLOSE, onClick : (e)=>saveOrCloseHandler(false)}))}
        </div>
      )
    }
  };

  const renderButtonIcon = (props) => {
    return (
      <Button {...props}/>
    )
  };
  const renderAvatarBlock = () => {
    if(editable) {
      return (
          <CardTitle className={CSS_PROFILE_USER_CARD_EDIT}>
            <Avatar className={theme[CSS_PROFILE_USER_AVATAR_EDIT]} onClick={(e)=>{console.log('make dialog')}}>
              <img src={userLogo} alt="user-logo"/>
              <FontIcon value='photo_camera'/>
            </Avatar>
            <Input className={CSS_PROFILE_USER_INPUT_TITLE_EDIT} value={userName} onChange={(e)=>parrentHandler(e, 'tempUserName','tempUserName')}/>
          </CardTitle>
      )
    } else {
      return (
        <div>
          <CardTitle avatar={userLogo} title={userName} />
         {/* <Avatar>
            <img src={USER_LOGO} alt="user-logo"/>
          </Avatar>*/}

        </div>
      )
    }
  }
  return (
    <CardTitle className={theme[CSS_PROFILE_USER]}>
      {renderAvatarBlock()}
      {renderIconBlock()}
    </CardTitle>
  )
};

export {ProfileUsersHeaderBlock}
