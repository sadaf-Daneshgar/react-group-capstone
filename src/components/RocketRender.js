import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve, cancelReservation } from '../redux/rocket/rocketsSlice';

function RocketRender({ Item }) {
  const dispatch = useDispatch();

  const handleReserveRocket = () => {
    dispatch(rocketReserve(Item.id));
  };

  const handleCancelReservation = () => {
    dispatch(cancelReservation(Item.id));
  };

  return (
    <div className="rocket-container">
      <div className="rocket-image">
        <img src={Item.flickr_images} alt={Item.name} />
      </div>
      <div className="main-part">
        <h3 className="rocket-title">{Item.name}</h3>
        <p className="details">
          {Item.reserved && <span className="reserved">Reserved</span>}
          {Item.description}
        </p>
        {Item.reserved ? (
          <button type="button" className="reserved-btn" onClick={handleCancelReservation}>
            Cancel Reservation
          </button>
        ) : (
          <button type="button" className="reserve-btn" onClick={handleReserveRocket}>
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

RocketRender.propTypes = {
  Item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketRender;
