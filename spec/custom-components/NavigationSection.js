import React, {Component} from 'react';
import {Chip} from '../../components/chip';
import {Avatar} from '../../components/avatar';
import {
  HEADER_MAIN_INFORMATION,
  HEADER_ACCOUNT_INFORMATION,
  HEADER_ORGANIZATION_ADMINS,
  HEADER_HARDWARE,
  HEADER_SUMMARY,
  CSS_HEADER_CHIP_SECTION,
  CSS_HEADER_CHIP,
  CSS_HEADER_CHIP_AVATAR,
  CSS_HEADER_CHIP_AVATAR_ACTIVE,
  CSS_HEADER_CHIP_LINE
} from '../task__kmc-416/constants';
import {themr} from 'react-css-themr';
import theme from '../task__kmc-416/theme.scss';

class NavigationSection extends Component {
  renderNavigationChip(chip = {}) {
    let {theme, currentIndex} = this.props;
    let getAvatarClass = (index) => {
      if (index <= currentIndex) {
        return theme[CSS_HEADER_CHIP_AVATAR] + ' ' +theme[CSS_HEADER_CHIP_AVATAR_ACTIVE];
      }
      else {
        return theme[CSS_HEADER_CHIP_AVATAR];
      }
    };
    let getAvatarIcon = chip.index+1 < currentIndex ? 'done' : '';
    return (
      <Chip key={chip.index} className={theme[CSS_HEADER_CHIP]}>
        <Avatar className={getAvatarClass(chip.index+1)} icon={getAvatarIcon}>{!getAvatarIcon && (chip.index + 1)}</Avatar>
        <span className={(chip.index + 1) != 5 && theme[CSS_HEADER_CHIP_LINE]}>{chip.header}</span>
      </Chip>
    )
  }

  render() {
    const headers = [HEADER_MAIN_INFORMATION, HEADER_ACCOUNT_INFORMATION,
      HEADER_ORGANIZATION_ADMINS, HEADER_HARDWARE, HEADER_SUMMARY];
    return (
      <div className={theme[CSS_HEADER_CHIP_SECTION]}>
        {
          headers.map((header, index)=>this.renderNavigationChip({header, index}))
        }
      </div>
    )
  }
}
const applyTheme = (Com) => themr('kmc', theme)(Com);
const ThemedNavigationSection = applyTheme(NavigationSection);
export {ThemedNavigationSection as NavigationSection};
