/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Chip} from '../../components/chip';
import {Avatar} from '../../components/avatar';
import {Input} from '../../components/input';
import {Table} from '../../components/table';
import style from '../style';
import {NavigationSection} from '../custom-components/NavigationSection';
import {
  BUTTON_CANCEL,
  BUTTON_NEXT,
  BUTTON_BACK,
  CSS_CLASS_DIVIDER,
  TASK_KMC_ID
} from '../task__kmc-416/constants';

const TestDataForTable = {
  tableModel: {
    'Model Number': {type: String},
    'Hardware Type': {type: String},
    'Manufacturer': {type: String},
    'Hardware ID': {type: Number}
  },
  testHardware: [
    {
      'Model Number': 'Number 123',
      'Hardware Type': 'Type 123',
      'Manufacturer': 'Man 123',
      'Hardware ID': 123123
    },
    {
      'Model Number': 'Number 123',
      'Hardware Type': 'Type 123',
      'Manufacturer': 'Man 123',
      'Hardware ID': 123123
    },
    {
      'Model Number': 'Number 123',
      'Hardware Type': 'Type 123',
      'Manufacturer': 'Man 123',
      'Hardware ID': 123123
    }
  ]
};

class Kmc419 extends Component {

  render() {
    return (
      <div className={style.app}>
        <section className={this.props.theme[TASK_KMC_ID]}>
          {/*   Header    */}
          <NavigationSection currentIndex={4}/>

          <div className={this.props.theme[CSS_CLASS_DIVIDER]}></div>
          {/*   Table section*/}
          <div>
            <Input type="text" label="search" icon="search" />
          </div>
          <Table
            model={TestDataForTable.tableModel}
            selectable
            multiSelectable
            source={TestDataForTable.testHardware}
          />
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
export default Kmc419;
