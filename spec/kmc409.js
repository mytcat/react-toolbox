/* global VERSION */
import '../components/commons.scss';
import React from 'react';
import AppBar from '../components/identifiers.js';
import Button, { IconButton } from '../components/button';
import Dropdown from '../components/dropdown';
import Input from '../components/input';
import Card, { CardActions, CardMedia, CardText, CardTitle } from '../components/card';
import TopBar from './components/topbar';

import style from './style';



const Kmc409 = () => (

  <div className={style.app}>
    <Card style={{width: '100%'}}>
      <TopBar></TopBar>
      <Dropdowns></Dropdowns>
      <IdInput></IdInput>
      <div style={{display: "flex", justifyContent:"flex-end"}}>
        <CardActions>
          <Button label="cancel" disabled/>
          <Button label="finish" />
        </CardActions>
      </div>
    </Card>


  </div>
);

const hardware_types = [
  {label: "Mission Caster Hardware"},
  {label: "Platform Hardware"}
];

const hardware_model = [
  {label: "MC4200"},
  {label: "MC5100"},
  {label: "Add another..."}
]

const manufacturers = [
  {label: "KSI Data Sciences"},
  {label: "Another_hardware_manufacturer"},
  {label: "Add another..."}
]

class Dropdowns extends React.Component {
  state = {
    selected: 0
  };

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
          <small>{data.value}</small>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div style={{width: '45%'}}>
            <Dropdown
              label="Hardware type"
              ref="dropdown1"
              onChange={this.handleChange.bind(this, 'dropdown1')}
              source={hardware_types}
              template={this.customDropdownItem}
              value={this.state.dropdown1}
            />
          </div>
          <div style={{width: '45%'}}>
            <Dropdown
              label="Manufacturer"
              ref="dropdown1"
              onChange={this.handleChange.bind(this, 'dropdown1')}
              source={manufacturers}
              template={this.customDropdownItem}
              value={this.state.dropdown1}
            />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end'}}>
            <div style={{width: '45%'}}>
                <Dropdown
                  label="Hardware model"
                  ref="dropdown1"
                  onChange={this.handleChange.bind(this, 'dropdown1')}
                  source={hardware_model}
                  template={this.customDropdownItem}
                  value={this.state.dropdown1}
                />
            </div>
            <div style={{width: '45%'}}>
              <Input type='text' label='Unique ID' name='id' value={this.state.id} onChange={this.handleChange.bind(this, 'id')} />
            </div>
        </div>
      </div>
    );
  }
}

class IdInput extends React.Component {
  state = { id: ''};

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return null;
  }
}




export default Kmc409;
