import React, {PropTypes} from 'react';
import Button from '../../components/button';
import FontIcon from '../../components/font_icon';
import {themr} from 'react-css-themr';
import photoButtonTheme from './photo-buttons.scss';

class PhotoButton extends React.Component {
  render() {
    let {theme} = this.props;

    return (
      <div className={theme['photoButton--section']}>
        <Button className={theme['photoButton--button']}>
          <FontIcon className={theme['photoButton--icon']}>{this.props.icon}</FontIcon>
        </Button>
      </div>
    )
  }
}

const applyTheme = (Component) => themr('photoButton', photoButtonTheme)(Component);
const ThemePhotoButton = applyTheme(PhotoButton)
export {ThemePhotoButton as PhotoButton}
