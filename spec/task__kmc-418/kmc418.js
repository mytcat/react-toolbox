/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Chip} from '../../components/chip';
import {Avatar} from '../../components/avatar';
import {Input} from '../../components/input';
import style from '../style';
import {NavigationSection} from '../custom-components/NavigationSection';

// import constants
import {
  BUTTON_CANCEL,
  BUTTON_NEXT,
  BUTTON_BACK,
  CSS_CLASS_DIVIDER,
  TASK_KMC_ID,
  FORM_FIRST_NAME,
  FORM_LAST_NAME,
  FORM_EMAIL,
  FORM_PHONE_NUMBER,
  FORM_TITLE,
  FORM_NOTES
} from '../task__kmc-416/constants';

// form section
const styleForFormBlock = {
  display: 'flex',
  justifyContent: 'space-between'
};

class Kmc418 extends Component {

  render() {
    return (
      <div className={style.app}>
        <section className={this.props.theme[TASK_KMC_ID]}>
          {/*   Header    */}
          <NavigationSection currentIndex={3}/>

          <div className={this.props.theme[CSS_CLASS_DIVIDER]}></div>
          {/*   Form section*/}
          <div style={styleForFormBlock}>
            <div style={{flex: `0 45%`}}>
              <Input type="text" label={FORM_FIRST_NAME}/>
            </div>
            <div style={{flex: `0 45%`}}>
              <Input type="text" label={FORM_LAST_NAME}/>
            </div>
          </div>
          <div style={styleForFormBlock}>
            <div style={{flex: `0 45%`}}>
              <Input type="email" label={FORM_EMAIL}/>
            </div>
            <div style={{flex: `0 45%`}}>
              <Input type="text" label={FORM_PHONE_NUMBER}/>
            </div>
          </div>
          <Input type="text" label={FORM_TITLE}/>
          <Input type="text" label={FORM_NOTES}/>
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
export default Kmc418;
