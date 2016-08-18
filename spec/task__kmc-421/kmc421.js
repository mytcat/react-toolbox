/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Card,CardMedia,CardText,CardTitle} from '../../components/card';
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
  BUTTON_BACK
} from '../task__kmc-416/constants';


class Kmc421 extends Component {

  render() {
    return (
      <div className={style.app}>
        <section className={this.props.theme['kmc']}>
          {/*   Header    */}
          <NavigationSection currentIndex={5}/>

          <div className={this.props.theme['kmc--divider']}></div>
          {/*   Cards info section*/}
          <CardTitle title={HEADER_MAIN_INFORMATION} style={{color: 'red', fontSize : '1rem'}}/>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}} title='company typed text' subtitle="Company Name"/>
            <CardTitle style={{flex : '1'}} title='ID typed' subtitle="ID NUmber"/>
          </section>
          {/* address */}
          <CardTitle title={TITLE_ADDRESS} style={{color: 'red', fontSize : '1rem'}}/>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}} title='33 some address' subtitle="Street"/>
            <CardTitle style={{flex : '1'}} title='Los Angeles' subtitle="City"/>
          </section>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}}  title='Texas' subtitle="State"/>
            <CardTitle style={{flex : '1'}} title='1111' subtitle="Postal code"/>
            <CardTitle style={{flex : '1'}} title='USA' subtitle="Country"/>
          </section>
          {/* account information */}
          <CardTitle title={HEADER_ACCOUNT_INFORMATION} style={{color: 'red', fontSize : '1rem'}}/>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}} title='A123BB##' subtitle="Account Number"/>
            <CardTitle style={{flex : '1'}} title='#9090' subtitle="OrderInformation"/>
          </section>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}}  title='26' subtitle="Amount"/>
            <CardTitle style={{flex : '1'}} title='1234' subtitle="Card Number"/>
          </section>
          {/* organization admins*/}
          <CardTitle title={HEADER_ORGANIZATION_ADMINS + ' #1'} style={{color: 'red', fontSize : '1rem'}}/>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}} title='first name' subtitle="First Name"/>
            <CardTitle style={{flex : '1'}} title='last name' subtitle="Last Name"/>
          </section>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}}  title='mail@mail' subtitle="Email"/>
            <CardTitle style={{flex : '1'}} title='099 333 222 11' subtitle="Phone Number"/>
          </section>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}}  title='title text' subtitle="Title"/>
            <CardTitle style={{flex : '1'}} title='notes text' subtitle="Notes"/>
          </section>
          {/* Hardware*/}
          <CardTitle title={HEADER_HARDWARE + ' #1'} style={{color: 'red', fontSize : '1rem'}}/>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}} title='BOX' subtitle="Hardware Type"/>
            <CardTitle style={{flex : '1'}} title='ABC123XX' subtitle="Hardware ID"/>
          </section>
          <section style={{display: 'flex'}}>
            <CardTitle style={{flex : '1'}}  title='Corp INC' subtitle="Manufacturer"/>
            <CardTitle style={{flex : '1'}} title='AA#322' subtitle="Model Number"/>
          </section>
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
export default Kmc420;
