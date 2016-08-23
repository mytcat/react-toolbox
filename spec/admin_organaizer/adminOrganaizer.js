import React, {Component, PropTypes} from 'react';
import { Card, CardTitle } from '../../components/card';
import {
  MISSION_IN_PROGRESS,
  USERS,
  SCHEDULED_MISSIONS,
  HARDWARE
} from './constants';

import {AdminOrgCardDefault, AdminOrgCardExpand} from './adminOrganaizerBlock';

class AdminOrganizer extends Component {
  constructor(props){
    super(props);
    this.state = {
      [MISSION_IN_PROGRESS +'_expanded'] : false,
      [USERS +'_expanded'] : false,
      [HARDWARE +'_expanded'] : false,
      [SCHEDULED_MISSIONS +'_expanded'] : false
    }
  }
  handleExpand(e,title){
    this.setState(Object.assign({}, this.state, {
      [title + '_expanded'] : !this.state[title +'_expanded']
    }));
  }
  renderCards() {
    let {data} = this.props;
    let keys = Object.keys(data);
    return keys.map((key, index)=> {
      let isExpanded = this.state[key + '_expanded'];
      let getData = !isExpanded ? data[key].filter((el,i)=>i <= 4) : data[key];
      let fullLength = data[key].length;
      if (key == USERS || key === HARDWARE) {
        return <AdminOrgCardExpand key={index}
                                   title={key}
                                   data={getData}
                                   fullLength={fullLength}
                                   expanded={this.state[key+'_expanded']}
                                   toggleExpand={this.handleExpand.bind(this)}
        />
      }
      else {
        return <AdminOrgCardDefault key={index}
                                    title={key}
                                    data={getData}
                                    fullLength={fullLength}
                                    expanded={this.state[key+'_expanded']}
                                    toggleExpand={this.handleExpand.bind(this)}
        />
      }
    });
  }

  render(){
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {this.renderCards()}
      </div>
    )
  }
}


AdminOrganizer.propTypes = {
  data : PropTypes.object.isRequired
};

export {AdminOrganizer};
