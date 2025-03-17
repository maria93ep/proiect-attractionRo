import React, { useState, useEffect } from 'react';
import insta from '../media/insta.png';
import fb from '../media/fb.png';
import gm from '../media/gm.png';
import visa from '../media/visa.png';
import maestro from '../media/maestro.png';
import paypal from '../media/paypal.png';
import master from '../media/master.png';

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = bodyHeight - windowHeight - 100;

      if (scrollPosition > scrollThreshold) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      className={`bg-dark text-white ${isFooterVisible ? '' : 'fixed-bottom'}`}
      style={{
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.8,
        height: '70px', // Reduce height to make footer smaller
        position: 'fixed',
        zIndex: 999,
      }}
    >
      <div className="container" style={{ maxWidth: '100vw' }}>
        <div className="row footer-container justify-content-center">
          <div className="col-md-3 col-sm-6 contact">
            <h6 style={{ fontSize: '1.2rem' }}>Contact</h6>
            <p>Email: contact@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-3 col-sm-6 social-media">
            <h6 style={{ fontSize: '1.2rem' }}>Follow Us</h6>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/suprovici.maria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={fb}
                    alt="Facebook"
                    style={{ width: '30px', marginRight: '10px' }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/suprovici.maria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={insta}
                    alt="Instagram"
                    style={{ width: '30px', marginRight: '10px' }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:contact@example.com">
                  <img
                    src={gm}
                    alt="Gmail"
                    style={{ width: '30px', marginRight: '10px' }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 payments">
            <h6 style={{ fontSize: '1.2rem' }}>Accepted Payments</h6>
            <ul className="list-inline">
              <li className="list-inline-item">
                <img src={visa} alt="Visa" style={{ width: '32px' }} />
              </li>
              <li className="list-inline-item">
                <img src={maestro} alt="Maestro" style={{ width: '32px' }} />
              </li>
              <li className="list-inline-item">
                <img src={paypal} alt="Paypal" style={{ width: '32px' }} />
              </li>
              <li className="list-inline-item">
                <img src={master} alt="Mastercard" style={{ width: '32px' }} />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0" style={{ fontSize: '1rem' }}>
              &copy; 2024 Heartwarming Destinations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
