import React, {Component, PropTypes} from 'react';
import { Card, CardTitle } from '../../components/card';
import {
  MISSION_IN_PROGRESS,
  USERS,
  SCHEDULED_MISSIONS,
  HARDWARE
} from './constants';

class AdminOrganaizer extends Component {

  render(){
    return (
      <div>


      </div>
    )
  }
}


AdminOrganaizer.propTypes = {
  [MISSION_IN_PROGRESS] : PropTypes.array.isRequired,
  [USERS] : PropTypes.array.isRequired,
  [SCHEDULED_MISSIONS] : PropTypes.array.isRequired,
  [HARDWARE] : PropTypes.array.isRequired
};

export {AdminOrganaizer};
