import React, { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import AttractionCard from "../components/AttractionCard";
import Footer from "../components/Footer";

const Favorites = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setAttractions(savedFavorites);
  }, []);

  const toggleFavorite = (id) => {
    const updatedAttractions = attractions.map((attraction) =>
      attraction.id === id ? { ...attraction, isFavorite: !attraction.isFavorite } : attraction
    );

    setAttractions(updatedAttractions);
    localStorage.setItem("favorites", JSON.stringify(updatedAttractions));
  };

  return (
    <>
      <ButtonComponent />
      {attractions.length > 0 &&
        attractions.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
            toggleFavorite={toggleFavorite}
          />
        ))}
      <Footer />
    </>
  );
};

export default Favorites;
