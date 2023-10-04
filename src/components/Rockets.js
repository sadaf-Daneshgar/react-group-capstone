import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData } from '../redux/rocket/rocketsSlice';
import RocketRender from './RocketRender';
import '../style/navbar.css';

function Rockets() {
  const dispatch = useDispatch();

  const { rockets, status, error } = useSelector(
    (state) => state.rockets,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getRocketsData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="loading">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="loading">{error}</div>;
  }

  return (
    <div className="container">
      {rockets.map((Item) => (
        <RocketRender key={Item.id} Item={Item} />
      ))}
    </div>
  );
}

export default Rockets;
