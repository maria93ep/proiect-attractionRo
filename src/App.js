import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router basename="/proiect-attractionRo">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:cityName" element={<LocationPage />} />
        <Route path="/hotel/:hotelId" element={<HotelPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
