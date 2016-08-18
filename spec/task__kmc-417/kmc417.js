/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Chip} from '../../components/chip';
import {Avatar} from '../../components/avatar';
import {Input} from '../../components/input';
import {NavigationSection} from '../custom-components/NavigationSection';
import style from '../style';
import {PhotoButton} from '../custom-components/PhotoButton';

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
    return (
      <div className={style.app}>
        <section className={this.props.theme[TASK_KMC_ID]}>
          {/*   Header    */}
          <NavigationSection currentIndex={2}/>

          <div className={this.props.theme[CSS_CLASS_DIVIDER]}></div>
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
            <Button label={BUTTON_BACK} flat style={{float: 'left'}}/>
            <Button label={BUTTON_CANCEL} flat style={{float: 'right'}}/>
            <Button label={BUTTON_NEXT} flat primary style={{float: 'right'}}/>
          </div>
        </section>
      </div>
    )
  }
}
export default Kmc417;
