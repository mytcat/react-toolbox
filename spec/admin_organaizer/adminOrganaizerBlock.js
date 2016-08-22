import React, {Proptypes, Component} from 'react';
import { Card, CardTitle } from '../../components/card';
import Button from '../../components/button';

const AdminOrgCardDefault = (
  {
    title,
    data = []
  }
) => {
/*
* view frist 5 from array
*
*
* */

  return (
    <Card>
      <CardTitle title={title}>
        {/*amount of data length*/}
        <span>{data.length}</span>
      </CardTitle>

      {/* bottom block */}

      <div>
        <Button value={'manage'.toUpperCase()}/>
      </div>

    </Card>
  )
}
