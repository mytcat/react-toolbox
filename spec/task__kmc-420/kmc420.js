/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Input} from '../../components/input';
import {Card,CardTitle,CardMedia} from '../../components/card';
import {NavigationSection} from '../custom-components/NavigationSection';
import style from '../style';
// import constants
import {
  HEADER_MAIN_INFORMATION,
  HEADER_HARDWARE,
  HEADER_ACCOUNT_INFORMATION,
  HEADER_ORGANIZATION_ADMINS,
  TITLE_ADDRESS,
  BUTTON_CANCEL,
  BUTTON_NEXT,
  BUTTON_BACK,
  CSS_CLASS_CARD_MEDIA_LOGO,
  CSS_CARD_GROUP,
  CSS_CLASS_CARD
} from '../task__kmc-416/constants';

import {Row, Col} from '../../components/grid/index';

class Kmc420 extends Component {

  render() {
    let {parentHandler, index, theme} = this.props;
    return (
      <div>
        <CardMedia >
          <img className={theme[CSS_CLASS_CARD_MEDIA_LOGO]} src="https://dl.dropboxusercontent.com/u/53778939/LOGO.svg"/>
        </CardMedia>
        {/*   Cards info section*/}
        <CardTitle className={theme[CSS_CLASS_CARD]} title={HEADER_MAIN_INFORMATION}/>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='company typed text' subtitle="Company Name"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='ID typed' subtitle="ID NUmber"/>
        </section>
        {/* address */}
        <CardTitle className={theme[CSS_CLASS_CARD]} title={TITLE_ADDRESS}/>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='33 some address' subtitle="Street"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='Los Angeles' subtitle="City"/>
        </section>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='Texas' subtitle="State"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='1111' subtitle="Postal code"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='USA' subtitle="Country"/>
        </section>
        {/* account information */}
        <CardTitle className={theme[CSS_CLASS_CARD]} title={HEADER_ACCOUNT_INFORMATION}/>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='A123BB##' subtitle="Account Number"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='#9090' subtitle="OrderInformation"/>
        </section>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='26' subtitle="Amount"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='1234' subtitle="Card Number"/>
        </section>
        {/* organization admins*/}
        <CardTitle className={theme[CSS_CLASS_CARD]} title={HEADER_ORGANIZATION_ADMINS + ' #1'}/>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='first name' subtitle="First Name"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='last name' subtitle="Last Name"/>
        </section>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='mail@mail' subtitle="Email"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='099 333 222 11' subtitle="Phone Number"/>
        </section>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='title text' subtitle="Title"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='notes text' subtitle="Notes"/>
        </section>
        {/* Hardware*/}
        <CardTitle className={theme[CSS_CLASS_CARD]} title={HEADER_HARDWARE + ' #1'}/>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='BOX' subtitle="Hardware Type"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='ABC123XX' subtitle="Hardware ID"/>
        </section>
        <section style={{display: 'flex'}}>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='Corp INC' subtitle="Manufacturer"/>
          <CardTitle className={theme[CSS_CARD_GROUP]} title='AA#322' subtitle="Model Number"/>
        </section>
        {/*   Navigation buttons*/}
        <Row expanded={true} align={'middle'}>
          <Col small={2}>
            <Button label={BUTTON_BACK} flat onClick={(e)=> {
              parentHandler(--index)
            }}/>
          </Col>
          <Col small={4} offset={'small-offset-6'} align={'stretch'}>
            <Button label={BUTTON_CANCEL} flat/>
            <Button label={BUTTON_NEXT} flat primary onClick={(e)=> {
              parentHandler(++index)
            }}/>
          </Col>
        </Row>
        {/*<div style={{overflow: 'hidden'}}>
          <Button label={BUTTON_BACK} flat style={{float: 'left'}} onClick={(e)=> {
            parentHandler(--index)
          }}/>
          <Button label={BUTTON_CANCEL} flat style={{float: 'right'}}/>
          <Button label={BUTTON_NEXT} flat primary style={{float: 'right'}} onClick={(e)=> {
            parentHandler(++index)
          }}/>
        </div>*/}
      </div>
    )
  }
}
export default Kmc420;
