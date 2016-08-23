/* global VERSION */
import '../../components/commons.scss';
import React from 'react';
import Button, {IconButton} from '../../components/button';
import Checkbox from '../../components/checkbox'
import Input from '../../components/input';
import FontIcon from '../../components/font_icon';
import {Card, CardActions, CardMedia, CardText, CardTitle} from '../../components/card';
import {KSI_ALERT_COLOR, KSI_SECONDARY_COLOR, FORGOT_BUTTON_COLOR} from '../constants';
import {TopBar} from '../custom-components/topbar.js';
import style from '../style';

import {themr} from 'react-css-themr';

const cardStyle = {
  width: '350px',
  color: KSI_ALERT_COLOR
}

const forgotButton = {
  color: FORGOT_BUTTON_COLOR
}

const signInButton = {
  background: KSI_ALERT_COLOR
}

const passwordInput = {
  position: 'relative'
}

const passwordIcon = {
  position: 'absolute',
  right: '0',
  top: '39%',
  color: KSI_SECONDARY_COLOR
}

const checkboxStyle = {
  padding: '25px 0 40px 0'
}

const buttonsContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

class Kmc427 extends React.Component {
  state = {email: "", password: "", check1: true, check2: false};

  handleChange = (field, value) => {
    this.setState({...this.state, [field]: value});
  };

  render() {
    return (
      <Card style={cardStyle}>
        <CardTitle
          title='Log In'
        />
        <div style={{padding: '0 5%'}}>
          <Input type="email"
                 value={this.state.email}
                 label="Email"
                 onChange={(v)=>{this.setState({email:v});}}
                 key="email"
          >
          </Input>
          <Input type="password"
                 value={this.state.password}
                 label="Password"
                 onChange={(p)=>{this.setState({password:p});}}
                 key="pass"
                 style={passwordInput}
          >
            <FontIcon style={passwordIcon}>visibility</FontIcon>
          </Input>
          <Checkbox
            checked={this.state.check1}
            label="Remember me"
            key="checkbox1"
            onChange={
              (v) => {
                this.setState({check1: v});
              }
            }
          />

        </div>

        <CardActions style={buttonsContainer}>
          <Button label="FORGOT PASSWORD?" style={forgotButton}/>
          <Button raised primary label="SIGN IN" style={signInButton}/>
        </CardActions>
      </Card>
    );
  }
}


export default Kmc427;
