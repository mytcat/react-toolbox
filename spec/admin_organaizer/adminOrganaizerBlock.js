import React, {Proptypes, Component} from 'react';
import { Card, CardTitle, CardActions,CardText } from '../../components/card';
import {Avatar} from '../../components/avatar';
import Button from '../../components/button';
import FontIcon from '../../components/font_icon';
import {USER_LOGO} from '../custom-components/topbar';

const AdminOrgCardDefault = (
  {
    title,
    data = [],
    fullLength,
    toggleExpand,
    expanded
  }
) => {
  let _btnExpandLabel_length = fullLength - data.length;
  let _btnExpandLabel_label = _btnExpandLabel_length <= 0 ? 'hide'.toUpperCase() : `View all ${_btnExpandLabel_length}`;
  return (
    <Card style={{marginBottom : '3rem',width: '45%'}}>
      <CardTitle title={title} style={{position: 'relative'}}>
        <span style={{position: 'absolute', right: '3rem', top: '2rem' ,fontSize : '3rem', color: 'red'}}>{fullLength}</span>
      </CardTitle>
        {data.map((field,index)=>{
          return (
            <div key={index} style={{display: 'flex'}}>
              <RenderExpandField key={field.left.title}
                                 isExpanded={false}
                                 title={field.left.title}
                                 subtitle={field.left.subtitle}/>
              <RenderExpandField key={field.right.title}
                                 isExpanded={false}
                                 title={field.right.title}
                                 subtitle={field.right.subtitle}/>
            </div>
          )
        })}
      <RenderBottomButtons title={title}
                           expanded={expanded}
                           handlerOnclick={toggleExpand}
                           _length={_btnExpandLabel_length}
      />

    </Card>
  )
};



const AdminOrgCardExpand = (
  {
    title,
    data = [],
    fullLength,
    toggleExpand,
    expanded
  }
) => {
  let _btnExpandLabel_length = fullLength - data.length;
  return (
    <Card style={{marginBottom : '3rem', width: '45%'}}>
      <CardTitle title={title} style={{position: 'relative'}}>
        <span style={{position: 'absolute', right: '3rem', top: '2rem' ,fontSize : '3rem', color: 'red'}}>{fullLength}</span>
      </CardTitle>

      {data.map((field,index)=>{
        return <RenderExpandField key={index}
                                  isExpanded={true}
                                  title={field.title}
                                  subtitle={field.subtitle}/>
      })}
      <RenderBottomButtons title={title}
                           expanded={expanded}
                           handlerOnclick={toggleExpand}
                            _length={_btnExpandLabel_length}
      />
    </Card>
  )
};

const RenderExpandField = ({
  isExpanded,
  title,
  subtitle

}) => {
  let renderExpandButton = (<Button icon={'more_vert'} floating mini />);
  return (
    <CardText style={{display: 'flex', alignItems : 'center', flex: isExpanded ? '1' : '6'}}>
      <CardTitle title={title}
                 subtitle={subtitle}
                 style={{flex: '11'}}
                 avatar={<img src={USER_LOGO}/>}
      />
      {isExpanded ? renderExpandButton : ''}
    </CardText>
  )
};

const RenderBottomButtons = ({
  title,
  expanded,
  _length,
  handlerOnclick
}) => {
  let getLabel = (len, expanded) => {
    if(len <= 0 && expanded){
      return 'hide'.toUpperCase();
    }
    else if (len > 0 && !expanded){
      return `View all ${len}`;
    }
  };
  // let _label = _length == 0 && expanded ? 'hide'.toUpperCase() : `View all ${_length}`;
  return (
    <div style={{overflow: 'hidden'}}>
      <Button label={getLabel(_length, expanded)}
        style={{float: 'left'}}
        onClick={(e)=>handlerOnclick(e, title)}
        />
      <Button label={'Manage'}
              style={{float: 'right'}}
              primary
      />
    </div>
  )
}
export {AdminOrgCardDefault,AdminOrgCardExpand};
