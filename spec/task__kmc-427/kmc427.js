/* global VERSION */
import '../../components/commons.scss';
import React from 'react';
import Button, {IconButton} from '../../components/button';
import Checkbox from '../../components/checkbox'
import Input from '../../components/input';
import FontIcon from '../../components/font_icon';
import {Card, CardActions, CardMedia, CardText, CardTitle} from '../../components/card';
import {KSI_ALERT_COLOR, FORGOT_BUTTON_COLOR} from '../constants';
import theme from './theme.scss';
import {TopBar} from '../custom-components/topbar.js';
import style from '../style';

import {themr} from 'react-css-themr';

const pageBackground = {
  width: '100vw',
  height: '100vh',
  clear: 'both',
  background: 'rgba(0,0,0,0.81)'
}

const rectangle = {
  width: '660px',
  height: '380px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  background: '#4e4e4e',
  border: 'none'
}

const logoAndCard = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  display: 'flex'
}

const live4Logo = {
  width: '150px'
}

const cardStyle = {
  width: '380px',
  color: KSI_ALERT_COLOR,
  marginLeft: '50px'
}

const cardTitleStyle = {
  fontWeight: 500,
  padding: '6rem 0 3rem 0'
}

const forgotButton = {
  color: FORGOT_BUTTON_COLOR
}

const signInButton = {
  background: KSI_ALERT_COLOR
}

const buttonsContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '2rem 2rem 2rem 1.3rem'
}

class Kmc427 extends React.Component {
  state = {email: "", password: "", check1: true, check2: false};

  handleChange = (field, value) => {
    this.setState({...this.state, [field]: value});
  };

  render () {
    return (
      <div >
        <div style={pageBackground}></div>
        <div style={rectangle}></div>
        <div style={logoAndCard}>
          <img src="/live4black" style={live4Logo}/>
          <Card style={cardStyle}>
            <div style={{padding: '0 2rem'}}>
              <h2 style={cardTitleStyle}>Log In</h2>
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
                     icon='visibility'
                     key="pass"
                     className={theme['input']}
              >
              </Input>
              <Checkbox
                checked={this.state.check1}
                label="Remember me"
                key="checkbox1"
                className={theme['field']}
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
        </div>
      </div>
    );
  }
}


export default Kmc427;
