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
  BUTTON_CANCEL,
  BUTTON_NEXT
} from '../task__kmc-416/constants';

import {
  CSS_HEADER_CHIP_SECTION,
  CSS_HEADER_CHIP,
  CSS_HEADER_CHIP_AVATAR,
  CSS_HEADER_CHIP_AVATAR_ACTIVE,
  CSS_HEADER_CHIP_LINE
} from '../task__kmc-416/constants';

import style from '../style';

import {PhotoButton} from '../custom-components/PhotoButton';
import {BUTTON_BACK} from '../task__kmc-416/constants';

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

class Kmc417 extends Component{

  render(){
    const activeAvatar = `${this.props.theme[CSS_HEADER_CHIP_AVATAR]} ${this.props.theme[CSS_HEADER_CHIP_AVATAR_ACTIVE]}`;
    return (
      <div className={style.app}>
        <section className={this.props.theme['kmc416']}>
          {/*   Header    */}
          <div className={this.props.theme[CSS_HEADER_CHIP_SECTION]}>
            <Chip className={this.props.theme[CSS_HEADER_CHIP]}>
              <Avatar className={activeAvatar} icon="done">
                </Avatar>
              <span className={this.props.theme[CSS_HEADER_CHIP_LINE]}>{HEADER_MAIN_INFORMATION}</span>
            </Chip>

            <Chip className={this.props.theme[CSS_HEADER_CHIP]}>
              <Avatar className={activeAvatar}>2</Avatar>
              <span className={this.props.theme[CSS_HEADER_CHIP_LINE]}>{HEADER_ACCOUNT_INFORMATION}</span>
            </Chip>

            <Chip className={this.props.theme[CSS_HEADER_CHIP]}>
              <Avatar className={this.props.theme[CSS_HEADER_CHIP_AVATAR]}>3</Avatar>
              <span className={this.props.theme[CSS_HEADER_CHIP_LINE]}>{HEADER_ORGANIZATION_ADMINS}</span>
            </Chip>

            <Chip className={this.props.theme[CSS_HEADER_CHIP]}>
              <Avatar className={this.props.theme[CSS_HEADER_CHIP_AVATAR]}>4</Avatar>
              <span className={this.props.theme[CSS_HEADER_CHIP_LINE]}>{HEADER_HARDWARE}</span>
            </Chip>

            <Chip className={this.props.theme[CSS_HEADER_CHIP]}>
              <Avatar className={this.props.theme[CSS_HEADER_CHIP_AVATAR]}>5</Avatar>
              <span>{HEADER_SUMMARY}</span>
            </Chip>
          </div>

          <div className={this.props.theme['kmc416--divider']}></div>
          {/*   Form section*/}
          <div style={styleForFormBlock}>
            <div style={{flex : `0 45%`}}>
              <Input type="text" label="Account number" />
            </div>
            <div style={{flex : `0 45%`}}>
              <Input type="text" label="Order information" />
            </div>
          </div>
          <div style={styleForFormBlock}>
            <div style={{flex : `0 45%`}}>
              <Input type="text" label="Amount $" />
            </div>
            <div style={{flex : `0 45%`}}>
              <Input type="text" label="Card number (Last 4 numbers)" />
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
