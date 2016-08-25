/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Chip} from '../../components/chip';
import {Avatar} from '../../components/avatar';
import {Input} from '../../components/input';
import {NavigationSection} from '../custom-components/NavigationSection';
import style from '../style';
import {PhotoButton} from '../custom-components/upload-button/PhotoButton';

// import constants
import {
  FORM_ACCOUNT_NUMBER,
  FORM_ORDER_INFORMATION,
  FORM_AMOUNT,
  FORM_CARD_NUMBER,
  CSS_CLASS_DIVIDER,
  TASK_KMC_ID,
  BUTTON_CANCEL,
  BUTTON_NEXT,
  BUTTON_BACK
} from '../task__kmc-416/constants';

// form section
const styleForFormBlock = {
  display: 'flex',
  justifyContent: 'space-between'
};


class Kmc417 extends Component{

  render(){
    let {parentHandler, index} = this.props;
    return (
        <div>
          {/*   Form section*/}
          <div style={styleForFormBlock}>
            <div style={{flex : `0 45%`}}>
              <Input type="text" label={FORM_ACCOUNT_NUMBER} />
            </div>
            <div style={{flex : `0 45%`}}>
              <Input type="text" label={FORM_ORDER_INFORMATION} />
            </div>
          </div>
          <div style={styleForFormBlock}>
            <div style={{flex : `0 45%`}}>
              <Input type="text" label={FORM_AMOUNT + ' $'} />
            </div>
            <div style={{flex : `0 45%`}}>
              <Input type="text" label={FORM_CARD_NUMBER} />
            </div>
          </div>
          {/*   Navigation buttons*/}
          <div style={{overflow: 'hidden'}}>
            <Button label={BUTTON_BACK} flat style={{float: 'left'}} onClick={(e)=>{parentHandler(--index)}} />
            <Button label={BUTTON_CANCEL} flat style={{float: 'right'}}/>
            <Button label={BUTTON_NEXT} flat primary style={{float: 'right'}} onClick={(e)=>{parentHandler(++index)}}/>
          </div>
        </div>
    )
  }
}
export default Kmc417;
