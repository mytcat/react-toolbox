import React, {Component} from 'react';
import style from '../style';
import {Card, CardTitle, CardText, CardMedia, CardActions} from '../../components/card';
import FontIcon from '../../components/font_icon';
import Button from '../../components/button';

import {USER_LOGO} from '../custom-components/topbar.js';
import {themr} from 'react-css-themr';
import profileUsersTheme from './profileUsersTheme.scss';

import {
  CSS_PROFILE_USER,
  CSS_PROFILE_USER_CREATE_BUTTON,
  CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK,
  ICON_CREATE,
  ICON_DONE,
  ICON_CLOSE
} from './constants';

class ProfileUsersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      editable : false,
      fields : {
        'Department' : '',
        'Phone Number' : '',
        'Title' : '',
        'Email' : '',
        'Account Status' : '',
        'Notice' : ''
      }
    }
  }
  toggleEdit(){
    this.setState({
      editable : !this.state.editable
    })
  }
  renderFields(fields = {}){
    let keys = Object.keys(fields);

    return (
      <div>

      </div>
    )
  }
  renderIconBlock(){
    let {editable} = this.state;
    let {theme} = this.props;
    let _props = {
      floating: true,
      onClick: this.toggleEdit.bind(this),
      className : theme[CSS_PROFILE_USER_CREATE_BUTTON]
    };
    if(!editable){
      _props = Object.assign(_props, {icon : ICON_CREATE});
      return (
        <div className={theme[CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK]}>
          {this.renderButtonIcon(_props)}
        </div>
      )
    } else {
      return (
        <div className={theme[CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK]}>
          {this.renderButtonIcon(Object.assign(_props, {icon : ICON_DONE}))}
          {this.renderButtonIcon(Object.assign(_props, {icon : ICON_CLOSE}))}
        </div>
      )
    }
  }
  renderButtonIcon(props){
    return (
      <Button {...props}/>
    )
  }
  render(){
    let {theme} = this.props;
    return (
      <div className={style.app}>
        <h3>Profile of User</h3>
        <Card>
          <CardTitle
            avatar={USER_LOGO}
            title="Benedict Cumber"
            className={theme[CSS_PROFILE_USER]}
          >
            {this.renderIconBlock()}
            {/*<FontIcon value={ICON_CREATE} />*/}

          </CardTitle>


          <CardText>
            <div>
              <CardTitle style={{width: '50%', float: 'left'}} title={'Law Department'} subtitle={'Department'}>

              </CardTitle>
              <CardTitle style={{width: '50%', float: 'left'}} title={'+1 333 88 99 00'} subtitle={'Phone Number'}>

              </CardTitle>

              <CardTitle style={{width: '50%', float: 'left'}} title={'Law Department'} subtitle={'Department'}>

              </CardTitle>
              <CardTitle style={{width: '50%', float: 'left'}} title={'+1 333 88 99 00'} subtitle={'Phone Number'}>

              </CardTitle>

              <CardTitle style={{width: '50%', float: 'left'}} title={'Law Department'} subtitle={'Department'}>

              </CardTitle>
              <CardTitle style={{width: '50%', float: 'left'}} title={'+1 333 88 99 00'} subtitle={'Phone Number'}>

              </CardTitle>
            </div>


          </CardText>
        </Card>
      </div>
    )
  }
}
const applyTheme = (Component)=>themr(CSS_PROFILE_USER,profileUsersTheme)(Component);
const ThemedProfileUser = applyTheme(ProfileUsersContainer);
export {ThemedProfileUser as ProfileUsersContainer};
