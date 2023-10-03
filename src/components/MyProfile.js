import React from 'react';
import ReservRocket from './rocket';
import {
  Container, Row,
} from 'react-bootstrap';
import Mission from './missions';

const MyProfile = () => (
  <Container>
    <Row>
      <Mission />
      <ReservRocket />
    </Row>
  </Container>
);

export default MyProfile;
