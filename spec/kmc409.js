/* global VERSION */
import '../components/commons.scss';
import React from 'react';
import Dropdown from '../components/dropdown';
import Button, { IconButton } from '../components/button';
import Card, { CardActions, CardMedia, CardText, CardTitle } from '../components/card';


import style from './style';



const Kmc409 = () => (
  <div className={style.app}>
    <Card style={{width: '350px'}}>

  
      <CardActions>
        <Button label="cancel" disabled/>
        <Button label="finish" />
      </CardActions>
    </Card>
  </div>
);

export default Kmc409;
