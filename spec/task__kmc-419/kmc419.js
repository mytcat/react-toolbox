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
      'Model Number': 'Number 333',
      'Hardware Type': 'Type 333',
      'Manufacturer': 'Man 333',
      'Hardware ID': 33333
    },
    {
      'Model Number': 'Number 666',
      'Hardware Type': 'Type 666',
      'Manufacturer': 'Man 666',
      'Hardware ID': 6666
    }
  ]
};

class Kmc419 extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : TestDataForTable.testHardware,
      selected : []
    }
  }
handleFilterData(str){
    let _reg = new RegExp(str, 'g','i');
    let newData = TestDataForTable.testHardware.filter(el=>{
      for(let key in el){
        if(el.hasOwnProperty(key) && _reg.test(el[key])){
          return el;
        }
      }
    });
    this.setState({
      data : newData
    });
  }
  handleOnSelect(selected){
    this.setState({
      selected
    })
  }
  render() {
    let {parentHandler, index, theme} = this.props;
    return (
      <div>
        {/*   Table section*/}
        <div>
          <Input type="text" label="search" icon="search" onChange={this.handleFilterData.bind(this)}/>
        </div>
        <Table
          model={TestDataForTable.tableModel}
          selectable
          multiSelectable
          source={this.state.data}
          selected={this.state.selected}
          onSelect={this.handleOnSelect.bind(this)}
        />
        {/*   Navigation buttons*/}
        <div style={{overflow: 'hidden'}}>
          <Button label={BUTTON_BACK} flat style={{float: 'left'}} onClick={(e)=> {
            parentHandler(--index)
          }}/>
          <Button label={BUTTON_CANCEL} flat style={{float: 'right'}}/>
          <Button label={BUTTON_NEXT} flat primary style={{float: 'right'}} onClick={(e)=> {
            parentHandler(++index)
          }}/>
        </div>
      </div>
    )
  }
}
export default Kmc419;
