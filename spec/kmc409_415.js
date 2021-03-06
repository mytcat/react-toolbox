import '../components/commons.scss';
import React from 'react';
import Button, {IconButton} from '../components/button';
import Dropdown from '../components/dropdown';
import Input from '../components/input';
import {Card, CardActions, CardMedia, CardText, CardTitle} from '../components/card';
import {TopBar} from './custom-components/topbar.js';
import {LeftSideBar} from './left-side-bar/LeftSideBar';
import {PhotoButton} from './custom-components/upload-button/PhotoButton.js';
import style from './style';

import {themr} from 'react-css-themr';
import customDropDown from './customDropDown.scss';
import {CSS_LEFT_SIDE_BAR_COLOR_BLUE} from './left-side-bar/constants';

const photoButtonContainer = {
  alignSelf: 'center',
  padding: '50px 0 70px 0'
}

const photoButton = {
  color: '#4e4e4e',
  border: '1px dashed',
  fontSize: '30px',
  background: '#F4F5F5',
  padding: '80px 70px 110px 80px'
}

const cardContainer = {
  padding: '30px 80px',
  marginLeft: '90px'
}

const topFields = {
  display: 'flex',
  justifyContent: 'space-around',
  paddingTop: '20px'
};

const fieldStyle = {
  width: '45%'
}

const bottomFields = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-end'
}

const cardButtons = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const cancelButton = {
  color: '#808080'
}

const finishButton = {
  color: '#2868C2'
}

const hardware_types = [
  {label: "Mission Caster Hardware", value: "1"},
  {label: "Platform Hardware", value: "2"}
];

const hardware_model = [
  {label: "MC4200", value: "1"},
  {label: "MC5100", value: "2"},
  {label: "Add another...", value: "3"}
]

const manufacturers = [
  {label: "KSI Data Sciences", value: "1"},
  {label: "Another_hardware_manufacturer", value: "2"},
  {label: "Add another...", value: "3"}
]

class Dropdowns extends React.Component {
  state = {
    selected: 0,
    dd1: 0,
    dd2: manufacturers[0].value,
    dd3: 0
  };

  dropDown1Changed (value) {
    this.setState({dd1: value});
  }

  dropDown2Changed (value) {
    this.setState({dd2: value});
  }

  dropDown3Changed (value) {
    this.setState({dd3: value});
  }

  handleChange (dropdown, value) {
    const newState = {};
    newState[dropdown] = value;
    this.setState(newState);
  };

  customImg (item) {
    const contentStyle = {
      display: 'none'
    }
  };

  customDropdownItem (data) {
    return (
      <div className={style.dropdownTemplate}>
        <img className={style.customImg} src={data.img}/>
        <div className={style.dropdownTemplateContent}>
          <span>{data.label}</span>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div>
        <div style={topFields}>
          <div style={fieldStyle}>
            <ThemedDropDown
              label="Hardware type"
              ref="dd1"
              onChange={this.dropDown1Changed.bind(this)}
              source={hardware_types}
              template={this.customDropdownItem}
              value={this.state.dd1}
            />
          </div>
          <div style={fieldStyle}>
            <ThemedDropDown
              label="Manufacturer"
              ref="dd2"
              onChange={this.dropDown2Changed.bind(this)}
              source={manufacturers}
              template={this.customDropdownItem}
              value={this.state.dd2}
            />
          </div>
        </div>
        <div style={bottomFields}>
          <div style={fieldStyle}>
            <ThemedDropDown
              label="Hardware model"
              ref="dd3"
              onChange={this.dropDown3Changed.bind(this)}
              source={hardware_model}
              template={this.customDropdownItem}
              value={this.state.dd3}
            />
          </div>
          <div style={fieldStyle}>
            <Input type='text' label='Unique ID' name='id' value={this.state.id}
                   onChange={this.handleChange.bind(this, 'id')}/>
          </div>
        </div>
      </div>
    );
  }
}


class IdInput extends React.Component {
  state = {id: ''};

  handleChange = (id, value) => {
    this.setState({...this.state, [id]: value});
  };

  // render () {
  //   return null;
  // }
}

const Kmc409_415 = ({theme}) => {
  render()
  {
    return (
      <div>
        <TopBar></TopBar>
        <LeftSideBar leftSideBarColor={CSS_LEFT_SIDE_BAR_COLOR_BLUE}></LeftSideBar>
        <div style={cardContainer}>
          <Card className={theme['customDropDown--card']} style={{width: '100%'}}>
            <PhotoButton icon="photo_camera">
            </PhotoButton>
            <Dropdowns></Dropdowns>
            <IdInput></IdInput>
            <div style={cardButtons}>
              <CardActions>
                <Button label="cancel" style={cancelButton}/>
                <Button label="finish" style={finishButton}/>
              </CardActions>
            </div>
          </Card>
        </div>
      </div>
    )
  }
};

/* DropDown*/
const CustomDropDown = ({theme, ...props}) => {
  return (

    <Dropdown
      className={theme.customDropDown}
      {...props}
    />
  )
};

const applyTheme = (Com)=>themr('customDropDown', customDropDown)(Com);
const ThemedDropDown = applyTheme(CustomDropDown);
const ThemedKmc409_415 = applyTheme(Kmc409_415);
export {ThemedKmc409_415 as _Kmc409_415};
