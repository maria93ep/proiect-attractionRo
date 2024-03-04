// ParentComponent.js
import React, { useState } from 'react';
import CategoryButtons from './CategoryButtons';
import attractionsAndHotels from './attractionsAndHotels'; // Make sure to import your attractions data

const getAttractionsByCategoryId = (category) => {
  // Assuming attractionsAndHotels is structured as you described
  return Object.values(attractionsAndHotels["Romania"]).flatMap(location =>
    location.attractions.filter(attraction => attraction.id === category)
  );
};

const ParentComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('nature');
  const [attractions, setAttractions] = useState(getAttractionsByCategoryId(selectedCategory));

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAttractions(getAttractionsByCategoryId(category));
  };

  return (
    <div>
      <CategoryButtons handleCategoryChange={handleCategoryChange} />
      <div className="main" style={{ padding: '20px' }}>
        <div className="row">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="col-md-4 mb-4">
              <img src={attraction.imageUrlA} alt={attraction.descriptions} style={{ width: '100%' }} />
              <p>{attraction.descriptions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
