import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/button';
import FontIcon from '../../components/font_icon';
import {themr} from 'react-css-themr';
import photoButtonTheme from './photo-buttons.scss';

class PhotoButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mouseEnter : false
    }
  }
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
}

const applyTheme = (Component) => themr('photoButton', photoButtonTheme)(Component);
const ThemePhotoButton = applyTheme(PhotoButton)
export {ThemePhotoButton as PhotoButton}
