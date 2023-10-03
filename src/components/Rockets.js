import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData, reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';
import '../style/navbar.css';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReserveBtn = (rocketId) => {
    if (rockets.find((rocket) => rocket.id === rocketId).reserved) {
      dispatch(cancelReservation({ canceledRocketId: rocketId }));
    } else {
      dispatch(reserveRocket({ reservedRocketId: rocketId }));
    }
  };

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="loading">Something went wrong during fetching rockets</div>;
  }

  return (
    <>
      <div className="container">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket">
            <div className="img">
              <img src={rocket.flickr_images[0]} alt={rocket.name} />
            </div>
            <div className="main-part">
              <h3 className="rocket-title">{rocket.name}</h3>
              <p className="details">
                {rocket.reserved && (
                  <span className="reserved">
                    Reserved
                  </span>
                )}
                {rocket.description}
              </p>
              <button
                type="button"
                className={`reserve-btn ${rocket.reserved ? 'reserved-btn' : ''}`}
                onClick={() => handleReserveBtn(rocket.id)}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rockets;
