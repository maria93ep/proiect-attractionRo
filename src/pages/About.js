import React from 'react';
import { Helmet } from 'react-helmet';
import Lucaimg from '../media/Lucaimg.jpg';
import man from '../media/man.jpg';
import lady from '../media/lady.jpg';
import ButtonComponent from '../components/ButtonComponent';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div style={{ backgroundColor: '#add8e6', padding: '20px' }}>
      <Helmet>
        <title>About Us - Discover Romania</title>
        <meta name="description" content="Learn more about our travel agency, our history, team, and services." />
      </Helmet>
      <ButtonComponent />
      <div className="container mt-5">
        <h1 className="mb-4 text-center">About Us</h1>
        <p className="text-center">Welcome to our holiday travel agency, where we make your dream vacations a reality! With over 10 years of experience in the travel industry, we are committed to providing you with the best travel experiences.</p>
        <h2 className="mt-5 mb-4 text-center">Our History</h2>
        <p className="text-center">Founded in 2020, our agency has grown from a small local business to a well-known travel company that caters to clients from around the world. Our passion for travel and dedication to customer satisfaction have been the driving forces behind our success. We started with a vision to create unforgettable travel experiences, and over the years, we have expanded our services and destinations to offer a wide range of options to our clients. Through hard work and commitment, we have built a reputation for excellence in the travel industry, and we continue to strive for excellence in everything we do.</p>
        <h2 className="mt-5 mb-4 text-center">Our Team</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-center">
              <img src={Lucaimg} alt="Team Member Luca Fillip" className="img-fluid img-thumbnail mr-3" style={{ width: '200px' }} />
            </div>
            <div className="text-center">
              <h4>Luca Fillip</h4>
              <p>Founder & CEO</p>
              <p>With over 10 years of experience in the travel industry, Luca has a passion for creating unforgettable travel experiences.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center">
              <img src={lady} alt="Team Member Luisa" className="img-fluid mr-3" style={{ width: '200px' }} />
            </div>
            <div className="text-center">
              <h4>Luisa Blanche</h4>
              <p>Travel Consultant</p>
              <p>Luisa has a knack for finding the perfect destinations for every type of traveler.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center">
              <img src={man} alt="Team Member Michael" className="img-fluid mr-3" style={{ width: '200px' }} />
            </div>
            <div className="text-center">
              <h4>Michael Bill</h4>
              <p>Customer Support</p>
              <p>Michael is dedicated to providing exceptional customer service and ensuring your travel experience is seamless.</p>
            </div>
          </div>
        </div>
        <h2 className="mt-5 mb-4 text-center">Destinations</h2>
        <p className="text-center">Discover the enchanting beauty of Romania with our curated selection of attractions. From the medieval charm of Transylvania to the breathtaking landscapes of the Danube Delta, Romania offers a diverse range of experiences for every traveler. Explore historic cities like Sibiu, Brasov, and Cluj-Napoca, where ancient architecture and rich culture await. Immerse yourself in the legends of Dracula in Transylvania, or witness the natural wonders of the Carpathian Mountains. Whether you're seeking adventure, relaxation, or cultural immersion, Romania has something for everyone.

Our team of travel experts has handpicked the best destinations in Romania to ensure you have an unforgettable experience. We offer personalized itineraries and expert guidance to help you make the most of your trip. Let us take you on a journey through the heart of Romania, where every corner is filled with history, beauty, and charm.</p>
        <h2 className="mt-5 mb-4 text-center">Services</h2>
        <p className="text-center">Our travel agency offers a wide range of services to cater to your every need. Whether you're looking for a relaxing beach getaway, an adventure-filled mountain retreat, or a cultural city break, we have the perfect package for you. Our experienced travel consultants are here to help you plan your dream vacation, from booking flights to finding the perfect hotel.

In addition to providing top-notch accommodation and flights, we also offer information on nearby tourist attractions. Whether you're interested in exploring historic landmarks, experiencing local culture, or simply relaxing in nature, we can recommend the best attractions near our hotels. Plus, with our convenient flight booking services, you can easily plan your itinerary to include visits to these attractions.

Whether you're traveling solo, as a couple, or with family, our team will tailor your trip to suit your interests, budget, and schedule. We take pride in providing personalized service to ensure your vacation is everything you've dreamed of and more.</p>
        <div className="row">
          <div className="col-md-6">
            <blockquote className="blockquote text-center">
              <p className="mb-0">"Amazing experience! The best vacation of my life. I highly recommend this agency."</p>
              <footer className="blockquote-footer">John Smith</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote text-center">
              <p className="mb-0">"Professional service and attention to detail. I will definitely book with them again."</p>
              <footer className="blockquote-footer">Jane Doe</footer>
            </blockquote>
          </div>
        </div>
        <h2 className="mt-5 mb-4 text-center">Contact Us</h2>
       
        <Footer />
      </div>
    </div>
  );
};

export default About;
