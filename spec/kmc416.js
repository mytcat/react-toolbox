/* global VERSION */
import '../components/commons.scss';
import React from 'react';
import Dropdown from '../components/dropdown';
import Button, {IconButton} from '../components/button';
import Card, {CardActions, CardMedia, CardText, CardTitle} from '../components/card';


import {Tabs, Tab} from '../components/tabs';
import {AppBar} from '../components/app_bar';
import {Chip} from '../components/chip';
import {Avatar} from '../components/avatar';
import FontIcon from '../components/font_icon';
import {Input} from '../components/input';

import style from './style';

const PADDING_BLOCK = '3em 0';

const chipSection = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};
const chipStyle = {
  background: 'none'
};
const chipAvatarStyle = {
  background : '#f22'
};
// section with button (photo)
const styleForSectionWithButton = {
  padding: PADDING_BLOCK,
  textAlign: 'center'
};
// form section
const styleForFormBlock = {
  display: 'flex',
  justifyContent: 'space-between'
};
const inputFormGroup_45 = {
  flex : '0 45%'
};
const inputFormGroup_30 = {
  flex : '0 30%'
};
// section with navigations buttons
const styleForNavigationButtons = {
  display : 'flex',
  justifyContent : 'flex-end',
  marginTop: '1.5em'
};
const styleForNavButtons = {
  marginRight : '1.5em'
};

const Kmc416 = () => {
  const _header = [
    {
      num : 1,
      descr : 'Main information'
    },
    {
      num : 2,
      descr : 'Account information'
    },
    {
      num : 3,
      descr : 'Organization Admins'
    },
    {
      num : 4,
      descr : 'Hardware'
    },
    {
      num : 5,
      descr : 'Summary'
    }
  ];
  return (
    <div className={style.app}>
      <section>
      <h3>KMC 416</h3>
      {/*   Header    */}
      <div style={chipSection}>
        {
          _header.map((el,index)=>(
              <Chip key={index} style={chipStyle}>

                <Avatar style={chipAvatarStyle}>{el.num}</Avatar>
                <span>{el.descr}</span>
              </Chip>
          ))
        }
      </div>
      {/*   Photo section*/}
      <div style={styleForSectionWithButton}>
        <CustomButton icon='photo_camera'/>
      </div>
      {/*   Form section*/}
      <div>
        <div style={styleForFormBlock}>
          <div style={inputFormGroup_45}>
            <Input type='text' label='Company name' />
          </div>
          <div style={inputFormGroup_45}>
            <Input type='text' label='ID Number' />
          </div>
        </div>
        <h5>Address</h5>
        <div style={styleForFormBlock}>
          <div style={inputFormGroup_45}>
            <Input type='text' label='Street'/>
          </div>
          <div style={inputFormGroup_45}>
            <Input type='text' label='city'/>
          </div>
        </div>
        <div style={styleForFormBlock}>
          <div style={inputFormGroup_30}>
            <Input type='text' label='Phone'  />
          </div>
          <div style={inputFormGroup_30}>
            <Input type='text'  label='Postal code' />
          </div>
          <div style={inputFormGroup_30}>
            <Input type='text'  label='Country' />
          </div>
        </div>
      </div>
        {/*   Navigation buttons*/}
        <div style={styleForNavigationButtons}>
          <Button style={styleForNavButtons} label='Cancel' flat disabled />
          <Button label='Next' flat primary />
        </div>
      </section>
    </div>
  )
};
// photo_camera

const CustomButton = ({icon}) =>{
  const styleForButton = {
    padding: '10em',
    border: '1px dotted #666'
  };
  return (
    <Button style={styleForButton}>
      <FontIcon>{icon}</FontIcon>
    </Button>
  )
};

export default Kmc416;
