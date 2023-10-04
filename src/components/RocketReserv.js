import React from 'react';
import { useSelector } from 'react-redux';

function RocketReserv() {
  const { rockets } = useSelector((store) => store.rockets);
  const rocketReserve = rockets.filter((Item) => Item.reserved);

  return (
    <>
      <div>
        <div className="reserve-container">
          <p className="title-r-r">My Rockets</p>
          {rocketReserve.map((Item) => (
            <div className="r-rocket" key={Item.id}>
              {Item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RocketReserv;
