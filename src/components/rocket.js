import { useSelector } from 'react-redux';
import '../style/navbar.css';

function ReservRocket() {
  const reservedRocketIds = useSelector(
    (state) => state.rockets.reservedRockets,
  );
  const rockets = useSelector((state) => state.rockets.rockets.filter(
    (rocket) => reservedRocketIds.includes(rocket.id),
  ));

  return (
    <>
      <div>
        <div className="reserve-container">
          <p className="title-r-r">My Rockets</p>
          {rockets.map((rocket) => (
            <div className="r-rocket" key={rocket.id}>
              {rocket.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReservRocket;
