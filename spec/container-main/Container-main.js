import React, {Component} from 'react';
import {LeftSideBar} from '../left-side-bar/LeftSideBar';
import {TopBar} from '../custom-components/topbar.js';
import {_Kmc416, _Kmc417, _Kmc418 , _Kmc419, _Kmc420, _Kmc421} from '../task__kmc-416/index';
import {
  CSS_LEFT_SIDE_BAR,
  CSS_LEFT_SIDE_BAR_COLOR_BLUE
} from '../left-side-bar/constants';
import {TASK_KMC_ID} from '../task__kmc-416/constants';
import {themr} from 'react-css-themr';
import theme from '../task__kmc-416/theme.scss';
import {
  CSS_CLASS_DIVIDER,
  HEADER_MAIN_INFORMATION,
  HEADER_ACCOUNT_INFORMATION,
  HEADER_ORGANIZATION_ADMINS,
  HEADER_HARDWARE,
  HEADER_SUMMARY
} from '../task__kmc-416/constants';
import {NavigationSection} from '../custom-components/NavigationSection';
import Card from '../../components/card';
import style from '../style';

class ContainerMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex : 1
    }
  }
  handleViewNavigation(newIndex){
    this.setState({
      currentIndex : newIndex
    })
  }
  renderView(){
    let st = {
      padding: '30px 80px',
      marginLeft: '90px'
    };

    if(this.state.currentIndex <= 5){
      return (
        <div style={st}>
          <Card className={this.props.theme[TASK_KMC_ID]}>
            <NavigationSection currentIndex={this.state.currentIndex}/>
            <div className={this.props.theme[CSS_CLASS_DIVIDER]}></div>
            {this.switchView(this.state.currentIndex)}
          </Card>
        </div>
      )
    } else {
      return (
        <div style={st}>
          <Card className={this.props.theme[TASK_KMC_ID]}>
            <_Kmc421 index={6} />
          </Card>
        </div>
      )
    }

  }
  switchView(index){
    switch(index){
      case 1 :
        return (<_Kmc416 index={1} parentHandler={this.handleViewNavigation.bind(this)} />);
      case 2 :
        return (<_Kmc417 index={2} parentHandler={this.handleViewNavigation.bind(this)} />);
      case 3 :
        return (<_Kmc418 index={3} parentHandler={this.handleViewNavigation.bind(this)} />);
      case 4 :
        return (<_Kmc419 index={4} parentHandler={this.handleViewNavigation.bind(this)} />);
      case 5 :
        return (<_Kmc420 index={5} parentHandler={this.handleViewNavigation.bind(this)} />);
      default :
        return (<div></div>)
    }

  }
  render(){
    return (
      <div >
        <TopBar />
        <LeftSideBar leftSideBarColor={CSS_LEFT_SIDE_BAR_COLOR_BLUE}/>
        {this.renderView()}
      </div>
    )
  }
}

const applyTheme = (Component)=>themr(TASK_KMC_ID, theme)(Component);
const ThemedContainerMain = applyTheme(ContainerMain);
export {ThemedContainerMain as ContainerMain};
