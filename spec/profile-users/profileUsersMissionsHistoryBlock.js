import React from 'react';
import {Table} from '../../components/table';
import FontIcon from '../../components/font_icon';

const MISSION_NAME = 'Mission Name';
const MISSION_OWNER = 'Mission Owner';
const MISSION_DATE = 'Date';
const MISSION_LOCATIONS = 'Locations';
const MISSION_STATUS = 'Status';
const MISSION_ICON = 'info';

const TABLE_MODEL = {
  [MISSION_NAME] : {type: String},
  [MISSION_OWNER] : {type : String},
  [MISSION_DATE] : {type : String},
  [MISSION_LOCATIONS] : {type : String},
  [MISSION_STATUS] : {type : String},
  [MISSION_ICON] : {type : FontIcon}
};
const TEST_DATA_FOR_TABLE = [
  {
    [MISSION_NAME] : 'mission #1',
    [MISSION_OWNER] : 'mission owner',
    [MISSION_DATE] : new Date().toString(),
    [MISSION_LOCATIONS] : 'mission locations #1',
    [MISSION_STATUS] : 'Archived',
    [MISSION_ICON] : <FontIcon value={MISSION_ICON}/>
  },
  {
    [MISSION_NAME] : 'mission #1',
    [MISSION_OWNER] : 'mission owner',
    [MISSION_DATE] : new Date().toString(),
    [MISSION_LOCATIONS] : 'mission locations #1',
    [MISSION_STATUS] : 'In-Progress',
    [MISSION_ICON] : <FontIcon value={MISSION_ICON}/>
  },
  {
    [MISSION_NAME] : 'mission #1',
    [MISSION_OWNER] : 'mission owner',
    [MISSION_DATE] : new Date().toString(),
    [MISSION_LOCATIONS] : 'mission locations #1',
    [MISSION_STATUS] : 'Scheduled',
    [MISSION_ICON] : <FontIcon value={MISSION_ICON}/>
  },
  {
    [MISSION_NAME] : 'mission #1',
    [MISSION_OWNER] : 'mission owner',
    [MISSION_DATE] : new Date().toString(),
    [MISSION_LOCATIONS] : 'mission locations #1',
    [MISSION_STATUS] : 'Archived',
    [MISSION_ICON] : <FontIcon value={MISSION_ICON}/>
  },
  {
    [MISSION_NAME] : 'mission #1',
    [MISSION_OWNER] : 'mission owner',
    [MISSION_DATE] : new Date().toString(),
    [MISSION_LOCATIONS] : 'mission locations #1',
    [MISSION_STATUS] : 'Scheduled',
    [MISSION_ICON] : <FontIcon value={MISSION_ICON}/>
  }
];

const ProfileUsersMissionsHistoryBlock = () => {

  return (
    <Table
      selectable={false}
      model={TABLE_MODEL}
      source={TEST_DATA_FOR_TABLE}
    />
  )
};

export {ProfileUsersMissionsHistoryBlock};
