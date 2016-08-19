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

class ProfileUsersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      editable : false,
      fields : TEST_FIELDS,
      temporaryFields : TEST_FIELDS,
    }
  }
  toggleEdit(bool){
    this.setState({
      editable : bool
    })
  }
  handleChange(e,label){
    this.setState({
      temporaryFields : Object.assign({},this.state.temporaryFields, {[label] : e})
    })
  }
  saveOrClose(bool) {
    if (bool) {
      this.setState({
        fields: this.state.temporaryFields,
      });
    } else {
      this.setState({
        temporaryFields : this.state.fields
      });
    }
    this.toggleEdit(false);
  }

  render(){
    let {theme} = this.props;
    let {temporaryFields, editable} = this.state;
    return (
      <div>
        <CardTitle
          avatar={USER_LOGO}
          title="Benedict Cumber"
          className={theme[CSS_PROFILE_USER]}
        >
          <ThemedProfileUsersHeaderBlock editable={editable}
                                         saveOrCloseHandler={this.saveOrClose.bind(this)}
                                         toggleHandler={this.toggleEdit.bind(this)}
          />

        </CardTitle>
        <ThemedProfileUserEditBlock fields={temporaryFields}
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
