import { useSelector } from 'react-redux';
import {
  ListGroup, Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Mission = () => {
  const { missions } = useSelector((store) => store.missions);

  const myMissions = missions.filter((item) => item.reserved);
  if (myMissions.length === 0) {
    return (
      <Col style={{ marginTop: '10px' }}>
        <h3>My Missions</h3>
        <p>You have not reserved any missions.</p>
      </Col>
    );
  }
  return (
    <Col style={{ marginTop: '10px' }}>
      <h3>My Missions</h3>
      <ListGroup as="ol">
        {myMissions.map((item) => (
          <ListGroup.Item as="li" key={item.id}>
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default Mission;
