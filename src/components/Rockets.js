import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData } from '../redux/rockets/rocketsSlice';
import '../style/navbar.css';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
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
        {rockets.map((rocketDetails) => (
          <div key={rocketDetails.id} className="rocket">
            <div className="img">
              <img src={rocketDetails.flickr_images[0]} alt={rocketDetails.name} />
            </div>
            <div className="main-part">
              <h3 className="rocet-title">{rocketDetails.name}</h3>
              <p className="details">{rocketDetails.description}</p>
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
