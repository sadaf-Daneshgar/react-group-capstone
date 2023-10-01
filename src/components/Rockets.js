import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import '../style/navbar.css';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="loading">Somthing wrong during fetching books</div>;
  }

  return (
    <>
      <div className="container">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket">
            <div className="img">
              <img src={rocket.flickr_images} alt={rocket.name} />
            </div>
            <div className="main-part">
              <h3 className="rocet-title">{rocket.name}</h3>
              <p className="details">{rocket.description}</p>
              <button type="button" className="reserve-btn">
                Reserve Rocket
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rockets;
