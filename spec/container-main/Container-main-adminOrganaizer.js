import React, {Component} from 'react';
import {LeftSideBar} from '../left-side-bar/LeftSideBar';
import {TopBar} from '../custom-components/topbar.js';
import {
  CSS_LEFT_SIDE_BAR_COLOR_BLUE
} from '../left-side-bar/constants';
import {TASK_KMC_ID} from '../task__kmc-416/constants';
import {themr} from 'react-css-themr';
import theme from '../task__kmc-416/theme.scss';
import style from '../style';
import {AdminOrganaizer} from '../admin_organaizer/adminOrganaizer';


import {
  MISSION_IN_PROGRESS,
  USERS,
  SCHEDULED_MISSIONS,
  HARDWARE
} from '../admin_organaizer/constants';
/*    Test data   */
const TEST_DATA_USERS = [
  {
    firstName : 'firstName #1',
    secondName : 'secondName #1',
    missionOwner : '123123#123'
  },
  {
    firstName : 'firstName #2',
    secondName : 'secondName #2',
    missionOwner : '656566565656#123'
  },
  {
    firstName : 'firstName #3',
    secondName : 'secondName #3',
    missionOwner : '33333#123'
  }
];
const TEST_DATA_MISSIONS_IN_PROGRESS = [
  {
    missionsName : 'mission #1',
    missionsOwner : 'name secondName',
    missionsDate : new Date(),
    missionsStatus : 'mission started'
  },
  {
    missionsName : 'mission #2',
    missionsOwner : 'name secondName',
    missionsDate : new Date(),
    missionsStatus : 'mission started'
  },
  {
    missionsName : 'mission #3',
    missionsOwner : 'name secondName',
    missionsDate : new Date(),
    missionsStatus : 'mission started'
  }
];
const TEST_DATA_HARDWARE = [
  {
    hardwareName : 'hard #1',
    hardwareModel : 'model #1',
    hardwareID : 'id #1'
  },
  {
    hardwareName : 'hard #2',
    hardwareModel : 'model #2',
    hardwareID : 'id #2'
  },
  {
    hardwareName : 'hard #3',
    hardwareModel : 'model #3',
    hardwareID : 'id #3'
  }
];
const TEST_DATA_SCHEDULED_MISSIONS = [
  {
    scheduledMissionName : 'ms_name #1',
    scheduledMissionOwner : 'ms_owner #1',
    scheduledMissionBegins : new Date()
  },
  {
    scheduledMissionName : 'ms_name #2',
    scheduledMissionOwner : 'ms_owner #2',
    scheduledMissionBegins : new Date()
  },
  {
    scheduledMissionName : 'ms_name #3',
    scheduledMissionOwner : 'ms_owner #3',
    scheduledMissionBegins : new Date()
  }
];

/*    end test data*/

class ContainerAdminOrganaizer extends Component {
  render(){
    let st = {
      padding: '30px 80px',
      marginLeft: '90px'
    };
    let testData = {
      [MISSION_IN_PROGRESS] : [TEST_DATA_MISSIONS_IN_PROGRESS],
      [USERS] : [TEST_DATA_USERS],
      [HARDWARE] : [TEST_DATA_HARDWARE],
      [SCHEDULED_MISSIONS] : [TEST_DATA_SCHEDULED_MISSIONS]
    };
    return (
      <div style={{position : 'relative', minHeight: '100%'}}>
        <TopBar />
        <LeftSideBar leftSideBarColor={CSS_LEFT_SIDE_BAR_COLOR_BLUE}/>
        <div style={st}>
          <AdminOrganaizer {...testData} />
        </div>
      </div>
    )
  }
}

export {ContainerAdminOrganaizer};
