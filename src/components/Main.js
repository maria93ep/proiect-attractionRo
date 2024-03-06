import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryButtons from './CategoryButtons'; 
import AttractionCard from './AttractionCard'; 
import attractionsAndHotelsStructure from './attractionsAndHotels';

const Main = () => {
  const [alignLeft] = useState(true);
  const [attractionsAndHotels, setAttractionsAndHotels] = useState(attractionsAndHotelsStructure);

  const handleCategoryChange = (category, country = 'Romania') => {
    const filteredAttractionsAndHotels = {};
    filteredAttractionsAndHotels[country] = {};

    Object.keys(attractionsAndHotelsStructure[country]).forEach((key) => {
      if (attractionsAndHotelsStructure[country][key].id === category) {
        filteredAttractionsAndHotels[country][key] = attractionsAndHotelsStructure[country][key];
      }
    });

    setAttractionsAndHotels(filteredAttractionsAndHotels);
  };

  return (
    <>
      <CategoryButtons handleCategoryChange={handleCategoryChange} />
      <div className="main" style={{ padding: '20px' }}>
        {Object.keys(attractionsAndHotels).map((countryName) => (
          <div key={countryName}>
            <h2>{countryName}</h2>
            <div className="row">
              {Object.keys(attractionsAndHotels[countryName]).map((cityName, index) => {
                const attractions = attractionsAndHotels[countryName][cityName].attractions;
                const isLeftAligned = alignLeft ? index % 2 === 0 : index % 2 !== 0;

                return (
                  <div key={cityName} className="col-md-6 mb-4">
                    <h5 className="card-title" style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '24px', fontWeight: 'bold' }}>
                      {cityName}
                    </h5>
                    {attractions.map((attraction, index) => (
                      <div
                        key={index}
                        className="card"
                        style={{
                          transition: 'transform 0.3s',
                          transformOrigin: 'center',
                          transform: 'scale(1)',
                          ':hover': { transform: 'scale(1.05)' },
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                      >
                        <AttractionCard attraction={attraction} cityName={cityName} alignLeft={isLeftAligned} />
                      </div>
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
    </>
  );
};

export default Main;
