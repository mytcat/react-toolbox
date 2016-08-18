import '../../components/commons.scss';
import React from 'react';
import AppBar from '../../components/app_bar/'
import FontIcon from '../../components/font_icon/'
import {IconMenu, MenuItem, MenuDivider } from '../../../react-toolbox/lib/menu';
import {themr} from 'react-css-themr';
// import topbar from './topbar.css';

const arrow = {
  cursor: 'pointer'
}

const h4Style = {
  paddingLeft: '40px'
}

const userAvatar = {
  display: 'flex',
  marginLeft: 'auto',
  cursor: 'pointer'
}

const TopBar = ({theme})=>{
  // className={theme.topbar}
  return (
      <div>
          <AppBar>
            <span style={arrow}>
              <FontIcon value="arrow_back"></FontIcon>
            </span>
            <h4 style={h4Style}>Add New Hardware</h4>
            <div style={userAvatar}>
                <div>
                  <img src="https://dl.dropboxusercontent.com/u/53778939/User%20avatar.png"/>
                </div>
                <div>
                  <IconMenu icon='arrow_drop_down' position='topRight' menuRipple>
                    <MenuItem value='ga' caption='Ga' />
                    <MenuItem value='gaga' caption='GaGa' />
                    <MenuDivider />
                    <MenuItem value='gagaga' caption='GaGaGa' />
                  </IconMenu>
                </div>
            </div>
          </AppBar>
      </div>
  );
};

const applyTheme = (Comp) => themr('topbar', topbar)(Comp);
const ThemedTopBar = applyTheme(TopBar);

export {ThemedTopBar as TopBar};
