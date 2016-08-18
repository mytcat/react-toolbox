/* global VERSION */
import '../components/commons.scss';
import React from 'react';
import AppBar from '../components/identifiers.js';
import Button, { IconButton } from '../components/button';
import Dropdown from '../components/dropdown';
import Input from '../components/input';
import Card, { CardActions, CardMedia, CardText, CardTitle } from '../components/card';
import {TopBar} from './custom-components/topbar';
import {PhotoButton} from './custom-components/PhotoButton.js';
import style from './style';

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
  padding: '30px 80px'
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

const Kmc409 = () => (

  <div>
    <div style={cardContainer}>
      <Card style={{width: '100%'}}>
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
);

const hardware_types = [
  {label: "Mission Caster Hardware", value: "1"},
  {label: "Platform Hardware", value: "2"}
];

const hardware_model = [
  {label: "MC4200", value: "1"},
  {label: "MC5100", value: "2"},
  {label: "Add another...", value:"3"}
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
    dd2: 0,
    dd3: 0
  };

  dropDown1Changed (value){
    this.setState({dd1: value});
  }
  dropDown2Changed (value){
    this.setState({dd2: value});
  }
  dropDown3Changed (value){
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
  }};

  customDropdownItem (data) {
    return (
      <div className={style.dropdownTemplate}>
        <img className={style.customImg} src={data.img} />
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
            <Dropdown
              label="Hardware type"
              ref="dd1"
              onChange={this.dropDown1Changed.bind(this)}
              source={hardware_types}
              template={this.customDropdownItem}
              value={this.state.dd1}
            />
          </div>
          <div style={fieldStyle}>
            <Dropdown
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
                <Dropdown
                  label="Hardware model"
                  ref="dd3"
                  onChange={this.dropDown3Changed.bind(this)}
                  source={hardware_model}
                  template={this.customDropdownItem}
                  value={this.state.dd3}
                />
            </div>
            <div style={fieldStyle}>
              <Input type='text' label='Unique ID' name='id' value={this.state.id} onChange={this.handleChange.bind(this, 'id')} />
            </div>
        </div>
      </div>
    );
  }
}

class IdInput extends React.Component {
  state = { id: ''};

  handleChange = (id, value) => {
    this.setState({...this.state, [id]: value});
  };

  render () {
    return null;
  }
}




export default Kmc409;
