/* global VERSION */
import '../../components/commons.scss';
import React, {Component, PropTypes} from 'react';
import Button from '../../components/button';
import {Card,CardMedia,CardText,CardTitle,CardActions} from '../../components/card';
import style from '../style';
// import constants
import {
  TASK_KMC_ID,
  BUTTON_BACK_TO_ORG_LIST,
  BUTTON_VIEW_ORG_LIST,
  CSS_CARD_TITLE,
  CSS_CLASS_CARD_MEDIA_ORGANIZATION_LOGO
} from '../task__kmc-416/constants';


class Kmc421 extends Component {

  render() {
    return (
         <div>
           <CardMedia color="blue"
                      style={{height: '250px', background: 'purple'}}>
             <img src="/org_logo" className={this.props.theme[CSS_CLASS_CARD_MEDIA_ORGANIZATION_LOGO]}/>
           </CardMedia>
           <CardTitle title="Congratulations!" className={this.props.theme[CSS_CARD_TITLE]}/>
           <CardText>
             <p style={{textAlign: 'center'}}>Organization profile has been created successfully</p>
           </CardText>
           <CardActions style={{display: 'block'}}>
             <Button label={BUTTON_BACK_TO_ORG_LIST.toUpperCase()} primary flat
                     style={{float: 'left'}}/>
             <Button label={BUTTON_VIEW_ORG_LIST.toUpperCase()} primary flat
                     style={{float: 'right'}}/>
           </CardActions>
         </div>
    )
  }
}
export default Kmc421;
