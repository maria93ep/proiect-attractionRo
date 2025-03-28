import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Importă Helmet pentru SEO
import attractionsAndHotels from '../components/attractionsAndHotels';

const HotelPage = () => {
  const { hotelId } = useParams();
  const [hotelData, setHotelData] = useState(null);
  const [error, setError] = useState('');
  const [adults, setAdults] = useState(1);
  const [children2, setChildren2] = useState(0);
  const [children6, setChildren6] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [initialPrice, setInitialPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    const findHotel = () => {
      for (const country in attractionsAndHotels) {
        for (const city in attractionsAndHotels[country]) {
          const hotels = attractionsAndHotels[country][city].hotels;
          const foundHotel = hotels.find(hotel => hotel.id === hotelId);
          if (foundHotel) {
            setHotelData(foundHotel);
            setInitialPrice(foundHotel.price);
            return;
          }
        }
      }
      setError('Hotel not found.');
    };

    if (attractionsAndHotels && Object.keys(attractionsAndHotels).length) {
      findHotel();
    } else {
      setError('Data not available.');
    }
  }, [hotelId]);

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate || !hotelData) {
      setError('Please select valid check-in and check-out dates.');
      return;
    }

    const numberOfNights = calculateNumberOfNights(checkInDate, checkOutDate);
    const hotelPrice = parseFloat(hotelData.price);
    const numAdults = parseInt(adults);
    const numChildren6 = parseInt(children6);
    let totalPrice = numAdults * hotelPrice * numberOfNights + numChildren6 * (hotelPrice / 2) * numberOfNights;

    if (hotelData.breakfast && selectedMeal === 'breakfast') {
      totalPrice += hotelData.breakfastPrice * numAdults * numberOfNights;
    }
    if (hotelData.lunch && selectedMeal === 'lunch') {
      totalPrice += hotelData.lunchPrice * (numAdults + children2 + numChildren6) * numberOfNights;
    }
    if (hotelData.dinner && selectedMeal === 'dinner') {
      totalPrice += hotelData.dinnerPrice * (numAdults + children2 + numChildren6) * numberOfNights;
    }

    setTotalPrice(totalPrice);
  };

  const calculateNumberOfNights = (checkIn, checkOut) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(checkIn);
    const secondDate = new Date(checkOut);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  };

  const handleReservation = () => {
    if (!checkInDate || !checkOutDate || !paymentMethod || !selectedMeal) {
      setError('Please fill in all fields.');
      return;
    }
    setConfirmationMessage('Congratulations! Your reservation has been successfully booked.');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>{hotelData ? `${hotelData.name} - Hotel Booking` : 'Hotel Booking'}</title>
        <meta name="description" content={hotelData ? `Book your stay at ${hotelData.name}, one of the best hotels in Romania. Check-in and check-out options available.` : 'Hotel Booking in Romania'} />
        <meta name="keywords" content="hotel booking, Romania hotels, best hotels Romania, Romania travel, hotel reservation" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div style={{
        textAlign: 'left',
        paddingLeft: '20px',
        backgroundImage: 'url(https://img.freepik.com/free-vector/happy-tourists-choosing-hotel-booking-room-online-flat-illustration_74855-10811.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
      }}>
        {hotelData ? (
          <div style={{
            maxWidth: '800px',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}>
            <h1 style={{ textAlign: 'center' }}>{hotelData.name}</h1>
            <p>{hotelData.description}</p>
            <div style={{ marginBottom: '10px' }}>
              <label>Check-in Date:</label>
              <input type="date" value={checkInDate} min={today} onChange={(e) => setCheckInDate(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Check-out Date:</label>
              <input type="date" value={checkOutDate} min={checkInDate || today} onChange={(e) => setCheckOutDate(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Number of Adults:</label>
              <input type="number" value={adults} min="1" onChange={(e) => setAdults(parseInt(e.target.value))} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Children (under 2 years old, free):</label>
              <input type="number" value={children2} min="0" onChange={(e) => setChildren2(parseInt(e.target.value))} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Children (2-6 years old, half price):</label>
              <input type="number" value={children6} min="0" onChange={(e) => setChildren6(parseInt(e.target.value))} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Meal:</label>
              <select value={selectedMeal} onChange={(e) => setSelectedMeal(e.target.value)}>
                <option value="">Select Meal</option>
                {hotelData.breakfast && <option value="breakfast">Breakfast (${hotelData.breakfastPrice} per person)</option>}
                {hotelData.lunch && <option value="lunch">Lunch (${hotelData.lunchPrice} per person)</option>}
                {hotelData.dinner && <option value="dinner">Dinner (${hotelData.dinnerPrice} per person)</option>}
              </select>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Payment Method:</label>
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="">Select Payment Method</option>
                <option value="visa">Visa</option>
                <option value="maestro">Maestro</option>
                <option value="master">Master</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            <button onClick={calculateTotalPrice}>Calculate Total Price</button>
            {totalPrice > 0 && <p style={{ color: 'green', fontSize: '1.5em' }}>Total Price: ${totalPrice.toFixed(2)}</p>}
            <button onClick={handleReservation} style={{ marginTop: '20px', marginBottom: '20px' }}>Book Now</button>
            {confirmationMessage && (
              <p style={{
                color: 'green',
                fontSize: '1.5em',
                animation: 'fireworks 1s ease-out',
                fontWeight: 'bold',
              }}>
                {confirmationMessage}
              </p>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        ) : (
          <p>{error}</p>
        )}

        <style>{`
          @keyframes fireworks {
            0% { transform: scale(1); opacity: 1; }
            25% { transform: scale(1.2); opacity: 0.8; }
            50% { transform: scale(1.4); opacity: 0.6; }
            75% { transform: scale(1.6); opacity: 0.4; }
            100% { transform: scale(1.8); opacity: 0; }
          }
        `}</style>
      </div>
    </>
  );
};

export default HotelPage;
