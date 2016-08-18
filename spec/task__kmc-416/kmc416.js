/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Chip} from '../../components/chip';
import {Avatar} from '../../components/avatar';
import {Input} from '../../components/input';


// import constants
import {
  HEADER_MAIN_INFORMATION,
  HEADER_ACCOUNT_INFORMATION,
  HEADER_ORGANIZATION_ADMINS,
  HEADER_HARDWARE,
  HEADER_SUMMARY,
  ICON_PHOTO_CAMERA,
  FORM_CITY,
  FORM_COMPANY_NAME,
  FORM_COUNTRY,
  FORM_ID_NUMBER,
  FORM_POSTAL_CODE,
  FORM_STREET,
  FORM_PHONE,
  BUTTON_CANCEL,
  BUTTON_NEXT
} from './constants';

import {
  CSS_HEADER_CHIP_SECTION,
  CSS_HEADER_CHIP,
  CSS_HEADER_CHIP_AVATAR,
  CSS_HEADER_CHIP_AVATAR_ACTIVE,
  CSS_HEADER_CHIP_LINE
} from './constants';

import style from '../style';

import {PhotoButton} from '../custom-components/PhotoButton';

// form section
const styleForFormBlock = {
  display: 'flex',
  justifyContent: 'space-between'
};

// section with navigations buttons
const styleForNavigationButtonsWrapper = {
  display : 'flex',
  justifyContent : 'flex-end',
  marginTop: '1.5em'
};

class Kmc416 extends Component{

  renderNavigationSection(){
    const headers = [HEADER_MAIN_INFORMATION, HEADER_ACCOUNT_INFORMATION,
      HEADER_ORGANIZATION_ADMINS,HEADER_HARDWARE,HEADER_SUMMARY];
    return (
      <div className={this.props.theme[CSS_HEADER_CHIP_SECTION]}>
        {
          headers.map((header, index)=>{
            return this.renderNavigationChip({header, index});
          })
        }
      </div>
    )
  }
  renderNavigationChip(chip = {}){
    let {theme} = this.props;
    return (
      <Chip key={chip.index} className={theme[CSS_HEADER_CHIP]}>
        <Avatar className={theme[CSS_HEADER_CHIP_AVATAR]}>{chip.index+1}</Avatar>
        <span className={(chip.index+1) != 5 && theme[CSS_HEADER_CHIP_LINE]}>{chip.header}</span>
      </Chip>
    )
  }
  renderFormInput(props={}){
    let {flexWidth, ...other} = props;
    return (
      <div style={{flex : `0 ${flexWidth}%`}}>
        <Input {...other} />
      </div>
    )
  }
  renderButton(props={}){
    return (
      <Button {...props}/>
    )
  }
  render(){
    return (
      <div className={style.app}>
        <section className={this.props.theme['kmc416']}>
          {/*   Header    */}
          {this.renderNavigationSection()}
          <div className={this.props.theme['kmc416--divider']}></div>
          {/*   Photo section*/}
          <PhotoButton icon={ICON_PHOTO_CAMERA}/>
          {/*   Form section*/}
            <div style={styleForFormBlock}>
                {this.renderFormInput({type: 'text', label : FORM_COMPANY_NAME, flexWidth : 45})}
                {this.renderFormInput({type: 'text', label : FORM_ID_NUMBER, flexWidth : 45})}
            </div>
            <h5>Address</h5>
            <div style={styleForFormBlock}>
                {this.renderFormInput({type: 'text', label : FORM_STREET, flexWidth : 45})}
                {this.renderFormInput({type: 'text', label : FORM_CITY, flexWidth : 45})}
            </div>
            <div style={styleForFormBlock}>
              {this.renderFormInput({type: 'text', label : FORM_PHONE, flexWidth : 30})}
              {this.renderFormInput({type: 'text', label : FORM_POSTAL_CODE, flexWidth : 30})}
              {this.renderFormInput({type: 'text', label : FORM_COUNTRY, flexWidth : 30})}
            </div>
          {/*   Navigation buttons*/}
          <div style={styleForNavigationButtonsWrapper}>
            {this.renderButton({label : BUTTON_CANCEL, flat: true, disabled: true})}
            {this.renderButton({label : BUTTON_NEXT, flat: true, primary: true})}
          </div>
        </section>
      </div>
    )
  }
}
export default Kmc416
