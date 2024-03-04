// Main.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import attractionsAndHotels from './attractionsAndHotels';
import AttractionCard from './AttractionCard';

const Main = () => {
  const [alignLeft] = useState(true); // Variabilă pentru alinierea textului

  return (
    <div className="main" style={{ padding: '20px' }}>
      {Object.keys(attractionsAndHotels).map((countryName) => (
        <div key={countryName}>
          <h2>{countryName}</h2>
          <div className="row">
            {Object.keys(attractionsAndHotels[countryName]).map((cityName, index) => {
              const attractions = attractionsAndHotels[countryName][cityName].attractions;

              // Schimbă alinierea textului între stânga și dreapta pe rânduri
              const isLeftAligned = alignLeft ? index % 2 === 0 : index % 2 !== 0;

              return (
                <div key={cityName} className="col-md-6 mb-4">
                <h5 className="card-title" style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '24px', fontWeight: 'bold' }}>{cityName}</h5>

                  {attractions.map((attraction, index) => (
                    <AttractionCard key={index} attraction={attraction} cityName={cityName} alignLeft={isLeftAligned} />
                  ))}
                  <div className="card-body text-center">
                    <Link to={`/location/${cityName}`} className="btn btn-secondary">View Hotels</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
