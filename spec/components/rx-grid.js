import React from 'react';
import {Row, Col} from '../../components/grid/index.js';

const TestGrid = () =>{
  return (
    <Row collapse={true} align={'spaced'} expanded={true} >
      <Col small={4}>
        test column #1
      </Col>
      <Col small={4}>
        test column #2
      </Col>
      <Col small={4}>
        <Col >
          test column #3
        </Col>
      </Col>
    </Row>
  )
};

export {TestGrid};
