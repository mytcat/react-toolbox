import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/button';
import FontIcon from '../../components/font_icon';
import {themr} from 'react-css-themr';
import photoButtonTheme from './photo-buttons.scss';
import classnames from 'classnames';


/*class PhotoButton extends React.Component {
  render() {
    let {theme, imgUrl,icon, handlerOnChange} = this.props;
    let _onChange = (e) => {
      handlerOnChange(e);
      this.refs.fileInput.value = '';
    };
    let renderImg = (
      <div className={theme['photoButton--image_wrapper']}>
        <img src={imgUrl}
             className={theme['photoButton--image_wrapper--image']}
        />
      </div>
    );
    let renderButton = (
      <Button className={theme['photoButton--button']}
              onClick={(e)=>{ReactDOM.findDOMNode(this.refs.fileInput).click();}}>
        <img src={imgUrl}
             className={theme['photoButton--image']}
        />
        <FontIcon className={theme['photoButton--icon']}>{icon}</FontIcon>
      </Button>
    );
    return (
      <div className={theme['photoButton--section']}>
        { imgUrl ? renderImg : renderButton}
      <input ref='fileInput' type='file' onChange={_onChange} style={{display: 'none'}}/>
      </div>
    )
  }
}*/

import {
  CSS_UPLOAD_BUTTON_BUTTON,
  CSS_UPLOAD_BUTTON_IMAGE,
  CSS_UPLOAD_BUTTON_ICON
} from './constants';

class UploadButton extends Component {
  render() {
    let { theme, icon, handlerOnChange } = this.props;
    let classes = classnames();
    return (
    <div className={theme['photoButton--section']}>
      <Button className={theme[CSS_UPLOAD_BUTTON_BUTTON]}
              onClick={(e)=> {
                ReactDOM.findDOMNode(this.refs.fileInput).click();
              }}>
        />
        <FontIcon className={theme[CSS_UPLOAD_BUTTON_ICON]}>{icon}</FontIcon>
      </Button>
      <input ref='fileInput' type='file' onChange={handlerOnChange} style={{display: 'none'}}/>
    </div>
    )
  }
}

const applyTheme = (Component) => themr('photoButton', photoButtonTheme)(Component);
const ThemePhotoButton = applyTheme(UploadButton)
export {ThemePhotoButton as UploadButton}
