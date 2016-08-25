/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Chip} from '../../components/chip';
import {Card} from '../../components/card';
import {Avatar} from '../../components/avatar';
import {Input} from '../../components/input';
import {NavigationSection} from '../custom-components/NavigationSection';

// import constants
import {
  ICON_PHOTO_CAMERA,
  FORM_CITY,
  FORM_COMPANY_NAME,
  FORM_COUNTRY,
  FORM_ID_NUMBER,
  FORM_POSTAL_CODE,
  FORM_STREET,
  FORM_PHONE,
  BUTTON_CANCEL,
  BUTTON_NEXT,
  TASK_KMC_ID,
  CSS_CLASS_DIVIDER
} from './constants';

import DropZone from '../custom-components/drop-zone/DropZone';


import style from '../style';

import {PhotoButton} from '../custom-components/upload-button/PhotoButton';


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
  constructor(props){
    super(props);
    this.state = {
      file : null,
      imagePreviewUrl : ''
    }
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
  onChangeHandler(e){
    let reader, file;
    e.preventDefault();
    reader = new FileReader();
    if(e.dataTransfer){
      file = e.dataTransfer.files[0];
    }
    else {
      file = e.target.files[0];
    }
    reader.onloadend = () => {
      this.setState({
        // isDragActive : false
        file : file,
        imagePreviewUrl : reader.result
      },()=>{
        // this.props.handlerOnChange(file,reader.result)
      });
    }

    reader.readAsDataURL(file)
  }
  render(){
    let {parentHandler, index} = this.props;
    return (
     <div>
          <DropZone handlerOnChange={this.onChangeHandler.bind(this)}>
          <h3>dsfsdf</h3>
          </DropZone>
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
            {this.renderButton({label : BUTTON_NEXT, flat: true, primary: true, onClick: (e)=>parentHandler(++index)})}
          </div>
     </div>
    )
  }
}
export default Kmc416
