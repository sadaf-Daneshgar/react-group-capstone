import React from 'react';
import {
  ListGroup, Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { useSelector } from 'react-redux';

function RocketReserv() {
  const { rockets } = useSelector((store) => store.rockets);
  const rocketReserve = rockets.filter((Item) => Item.reserved);

  if (rocketReserve.length === 0) {
    return (
      <Col style={{ marginTop: '10px' }}>
        <h3>My Rockets</h3>
        <p>You have not reserved any rockets.</p>
      </Col>
    );
  }

  return (
    <>
      <Col style={{ marginTop: '10px' }}>
        <h3>My Rockets</h3>
        <ListGroup as="ol">
          {rocketReserve.map((Item) => (
            <ListGroup.Item as="li" key={Item.id}>
              {Item.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </>
  );
}

export default RocketReserv;
