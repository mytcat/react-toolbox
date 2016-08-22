import React from 'react';
import {
  CSS_PROFILE_USER_INPUT,
  CSS_PROFILE_USER_CARD_TITLE
} from './constants';
import {Card, CardTitle, CardText} from '../../components/card';
import Input from '../../components/input';


const ProfileUsersEditBlock = ({theme, editable, updateFields,fields}) => {
  const renderFields=(fields = {}) => {
    let keys = Object.keys(fields);
    return (
      <div>
        {keys.map((key,index)=>renderField({value : fields[key], label : key, index : index}))}
      </div>
    )
  };
  const renderField=(field = {}) => {

    if (editable) {
      return (
        <Input className={theme[CSS_PROFILE_USER_INPUT]} onChange={(e)=>updateFields(e, 'tempFields', field.label)}
               key={field.index} type={'text'} value={field.value} label={field.label}/>
      )
    } else {
      return (
        <CardTitle key={field.index} className={theme[CSS_PROFILE_USER_CARD_TITLE]}
                   title={field.value} subtitle={field.label}/>
      )
    }
  };
    return (
      <Card>
      <CardText>
        {renderFields(fields)}
      </CardText>
      </Card>
    )
};
export {ProfileUsersEditBlock}


