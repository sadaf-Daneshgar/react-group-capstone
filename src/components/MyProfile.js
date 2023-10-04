import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReservRocket from './RocketReserv';
import Mission from './missions';

const MyProfile = () => (
  <>
    <Container>
      <Row>
        <ReservRocket />
        <Mission />
      </Row>
    </Container>
  </>
);

export default MyProfile;
