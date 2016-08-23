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
import {AdminOrganizer} from '../admin_organaizer/adminOrganaizer';


import {
  MISSION_IN_PROGRESS,
  USERS,
  SCHEDULED_MISSIONS,
  HARDWARE
} from '../admin_organaizer/constants';
/*    Test data   */
/*    data to props. optimize data before push it to props, only AdminOrganaizer will have logic
*     . example , title = user.firstName + user.secondName;
*                 subtitle = user.userToMissionStatus + user.missionID
*                 something like this
* */
const TEST_DATA_USERS = [
  {
    title : 'Name SecondName #1',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #2',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #3',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #4',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #5',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #6',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #7',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #8',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #9',
    subtitle : 'Mission _status_ #missionID'
  },
  {
    title : 'Name SecondName #10',
    subtitle : 'Mission _status_ #missionID'
  }
];
const TEST_DATA_MISSIONS_IN_PROGRESS = [
  {
    left: {
      title : 'missionsName #1',
      subtitle : 'missionsOwner #1'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'missions started'
    }
  },
  {
    left: {
      title : 'missionsName #2',
      subtitle : 'missionsOwner #2'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'missions started'
    }
  },
  {
    left: {
      title : 'missionsName #3',
      subtitle : 'missionsOwner #3'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'missions started'
    }
  }
];
const TEST_DATA_HARDWARE = [
  {
    title : 'Hardware Name #1',
    subtitle : 'Hardware Model + hardWare ID'
  },
  {
    title : 'Hardware Name #2',
    subtitle : 'Hardware Model + hardWare ID'
  },
  {
    title : 'Hardware Name #3',
    subtitle : 'Hardware Model + hardWare ID'
  },
  {
    title : 'Hardware Name #4',
    subtitle : 'Hardware Model + hardWare ID'
  },
  {
    title : 'Hardware Name #5',
    subtitle : 'Hardware Model + hardWare ID'
  },
  {
    title : 'Hardware Name #6',
    subtitle : 'Hardware Model + hardWare ID'
  },
  {
    title : 'Hardware Name #7',
    subtitle : 'Hardware Model + hardWare ID'
  }

];
const TEST_DATA_SCHEDULED_MISSIONS = [
  {
    left: {
      title : 'schedule_mission #1',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
  {
    left: {
      title : 'schedule_mission #2',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
  {
    left: {
      title : 'schedule_mission #3',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
  {
    left: {
      title : 'schedule_mission #4',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
  {
    left: {
      title : 'schedule_mission #5',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
  {
    left: {
      title : 'schedule_mission #6',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
  {
    left: {
      title : 'schedule_mission #7',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
  {
    left: {
      title : 'schedule_mission #8',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
  {
    left: {
      title : 'schedule_mission #9',
      subtitle : 'schedule_mission Owner'
    },
    right : {
      title : new Date().toString(),
      subtitle : 'mission begins'
    }
  },
];

/*    end test data*/

class ContainerAdminOrganizer extends Component {
  render(){
    let st = {
      padding: '30px 80px',
      marginLeft: '90px'
    };
    let testData = {
      [MISSION_IN_PROGRESS] : TEST_DATA_MISSIONS_IN_PROGRESS,
      [USERS] : TEST_DATA_USERS,
      [SCHEDULED_MISSIONS] : TEST_DATA_SCHEDULED_MISSIONS,
      [HARDWARE] : TEST_DATA_HARDWARE
    };
    return (
      <div style={{position : 'relative', minHeight: '100%'}}>
        <TopBar />
        <LeftSideBar leftSideBarColor={CSS_LEFT_SIDE_BAR_COLOR_BLUE}/>
        <div style={st}>
          <AdminOrganizer data={testData} />
        </div>
      </div>
    )
  }
}

export {ContainerAdminOrganizer};
