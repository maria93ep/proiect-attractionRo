
import React from 'react';
import CardLocation from './CardLocation';

const LocationList = ({ locations }) => {
  const locationKeys = Object.keys(locations);

  return (
    <div className="row">
      {locationKeys.map((locationKey, index) => (
        <div key={index} className="col-md-4">
          <CardLocation {...locations[locationKey]} />
        </div>
      ))}
    </div>
  );
};

export default LocationList;