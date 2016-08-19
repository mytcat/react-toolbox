import React, {Component} from 'react';
import style from '../style';
import {Card, CardTitle, CardText, CardMedia, CardActions} from '../../components/card';
import FontIcon from '../../components/font_icon';
import Input from '../../components/input';
import Button from '../../components/button';

import {USER_LOGO} from '../custom-components/topbar.js';
import {themr} from 'react-css-themr';
import profileUsersTheme from './profileUsersTheme.scss';

import {
  CSS_PROFILE_USER,
  CSS_PROFILE_USER_CREATE_BUTTON,
  CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK,
  CSS_PROFILE_USER_INPUT,
  ICON_CREATE,
  ICON_DONE,
  ICON_CLOSE
} from './constants';

class ProfileUsersContainer extends Component {
  constructor(props){
    super(props);
    this._fields = {
      'Department' : ' ',
      'Phone Number' : ' ',
      'Title' : ' ',
      'Email' : ' ',
      'Account Status' : ' ',
      'Notice' : ' '
    };

    this.state = {
      editable : false,
      fields : this._fields,
      fieldsBeforeSaving : this._fields
    }
  }
  toggleEdit(bool){
    this.setState({
      editable : bool
    })
  }
  saveOrClose(bool){
    if(bool){
      this.setState({
        fields : Object.assign({}, this.state.fields, this.state.fieldsBeforeSaving)
      });
    } else {
      this.setState({
        fieldsBeforeSaving : this._fields
      })
    }
    this.toggleEdit(false);
  }
  handleChange(e,label){
    this.setState({
      fieldsBeforeSaving : Object.assign({},this.state.fieldsBeforeSaving, {[label] : e})
    }, ()=>{
      console.log(this.state.fieldsBeforeSaving[label])
    })
  }
  renderFields(fields = {}){
    let keys = Object.keys(fields);

    return (
      <div>
        {keys.map((key,index)=>this.renderField({value : fields[key], label : key, index : index}))}
      </div>
    )
  }

  renderField(field = {}) {
    let {editable} = this.state;
    let {theme} = this.props;
    if (editable) {
      return (
        <Input className={theme[CSS_PROFILE_USER_INPUT]} onChange={(e)=>this.handleChange(e,field.label)}
               key={field.index} type={'text'} value={field.value} label={field.label}/>
      )
    } else {
      return (
        <CardTitle key={field.index} style={{width: '50%', float: 'left'}}
                   title={field.value} subtitle={field.label}/>
      )
    }
  }
  renderIconBlock(){
    var {theme} = this.props;
    var _props = {
      floating: true,
      onClick: this.toggleEdit.bind(this),
      className : theme[CSS_PROFILE_USER_CREATE_BUTTON]
    };
    if(!this.state.editable){
      _props = Object.assign(_props, {icon : ICON_CREATE});
      return (
        <div className={theme[CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK]}>
          {this.renderButtonIcon(_props)}
        </div>
      )
    } else {
      return (
        <div className={theme[CSS_PROFILE_USER_CREATE_BUTTONS_BLOCK]}>
          {this.renderButtonIcon(Object.assign(_props, {icon : ICON_DONE, onClick : (e)=>this.saveOrClose(true)}))}
          {this.renderButtonIcon(Object.assign(_props, {icon : ICON_CLOSE, onClick : (e)=>this.saveOrClose(false)}))}
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
             {/* <CardTitle style={{width: '50%', float: 'left'}} title={'Law Department'} subtitle={'Department'}>

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

              </CardTitle>*/}
              {this.renderFields(this.state.fieldsBeforeSaving)}
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
