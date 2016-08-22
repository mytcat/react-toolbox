import React, {Component} from 'react';
import style from '../style';
import {CardTitle, Card} from '../../components/card';
import {themr} from 'react-css-themr';
import profileUsersTheme from './profileUsersTheme.scss';
import {ProfileUsersEditBlock} from './profileUsersEditBlock';
import {ProfileUsersHeaderBlock} from './profileUsersHeaderBlock';
import {ProfileUsersMissionsHistoryBlock} from './profileUsersMissionsHistoryBlock';

import {USER_LOGO} from '../custom-components/topbar.js';
import {
  CSS_PROFILE_USER,
} from './constants';

const TEST_FIELDS = {
  'Department' : ' ',
  'Phone Number' : ' ',
  'Title' : ' ',
  'Email' : ' ',
  'Account Status' : ' ',
  'Notice' : ' '
};
const USER_NAME = 'Test UserName';

class ProfileUsersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      editable : false,
      fields : TEST_FIELDS,
      userName : USER_NAME,
      userLogo : USER_LOGO,
      temporary : {
        tempFields : TEST_FIELDS,
        tempUserName : USER_NAME,
        tempUserLogo : USER_LOGO
      }
    }
  }
  toggleEdit(bool){
    this.setState({
      editable : bool
    })
  }
  handleChange(val,tempSubset, label){
    if(tempSubset == 'tempFields'){
    this.setState({
      temporary : Object.assign({}, this.state.temporary, {
        [tempSubset] : Object.assign({},this.state.temporary[tempSubset], { [label] : val})
      })
    })
    }
    else {
      this.setState({
        temporary : Object.assign({}, this.state.temporary, {
          [tempSubset] : val
        })
      })
    }
  }
  saveOrClose(bool) {
    if (bool) {
      this.setState({
        fields: this.state.temporary.tempFields,
        userName : this.state.temporary.tempUserName,
        userLogo : this.state.temporary.tempUserLogo
      });
    } else {
      this.setState({
        temporary: Object.assign({}, this.state.temporary, {
          tempFields: this.state.fields,
          tempUserName : this.state.userName,
          tempUserLogo : this.state.userLogo
        })
      });
    }
    this.toggleEdit(false);
  }

  render(){
    let {temporary, editable} = this.state;
    let {tempUserName, tempUserLogo, tempFields } = temporary;
    return (
      <div>
          <ThemedProfileUsersHeaderBlock editable={editable}
                                         userName={tempUserName}
                                         userLogo={tempUserLogo}
                                         saveOrCloseHandler={this.saveOrClose.bind(this)}
                                         toggleHandler={this.toggleEdit.bind(this)}
                                         parrentHandler={this.handleChange.bind(this)}
          />

        <ThemedProfileUserEditBlock fields={tempFields}
                                    editable={editable}
                                    updateFields={this.handleChange.bind(this)}
        />

      <Card style={{marginTop : '3.6rem'}}>
        <ProfileUsersMissionsHistoryBlock />
      </Card>
        </div>
    )
  }
}
const applyTheme = (Component)=>themr(CSS_PROFILE_USER,profileUsersTheme)(Component);
const ThemedProfileUser = applyTheme(ProfileUsersContainer);
const ThemedProfileUserEditBlock = applyTheme(ProfileUsersEditBlock);
const ThemedProfileUsersHeaderBlock = applyTheme(ProfileUsersHeaderBlock);
export {ThemedProfileUser as ProfileUsersContainer};
