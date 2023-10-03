import React from "react";
import ReservRocket from "./rocket";
import { Container, Row } from "react-bootstrap";
import Mission from "./missions";

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
