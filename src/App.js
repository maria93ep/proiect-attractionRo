import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Blog from "./pages/Blog";
import LocationPage from "./pages/LocationPage";
import HotelPage from "./pages/HotelPage";
import attractionsAndHotels from './components/attractionsAndHotels'; 

function App() {
  console.log(attractionsAndHotels); 
  return (
    <BrowserRouter basename="/proiect-attractionRo">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:cityName" element={<LocationPage />} />
        <Route path="/hotel/:hotelId" element={<HotelPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
