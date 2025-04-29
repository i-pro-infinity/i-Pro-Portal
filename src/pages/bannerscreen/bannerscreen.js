import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../../components/Header/header';
import Commercial from '../../assets/commercial vehicle.jpeg';
import car from '../../assets/car-banner.png';
import scooty from '../../assets/scooty-banner.png';
import health from '../../assets/health-banners.jpeg';
import heart from '../../assets/Heart.png';
import cloudimage from '../../assets/ChatGPT Image Apr 16, 2025, 12_35_32 PM 1.png';
import Footer from "../../components/footer/footer";
import { useNavigate } from 'react-router-dom';
import "./bannerscreen.css";

function Bannerscreen() {

  const [imageIndex, setImageIndex] = useState(0);
  const images = [car, scooty, Commercial, health]; // Array of images in the desired order
  const bannerTexts = [
    "Car Insurance – Take a 4-wheeler insurance in a few simple steps",
    "Bike Insurance – Take a 2-wheeler insurance in a few simple steps",
    "Commercial Vehicle Insurance – Take a commercial vehicle insurance in a few simple steps",
    "Health Insurance – Take a health insurance policy in a few simple steps"
  ];

  const bannerLinks = [
    "https://uatweb.iproinfinity.com/bike-insurance/", // Car
    "https://uatweb.iproinfinity.com/bike-insurance/", // Bike
    "https://uatweb.iproinfinity.com/commercial-vehicle-insurance/#/", // Commercial
    "https://uatweb.iproinfinity.com/health-insurance/#/" // Health
  ];

  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      // Start image switching if not hovered
      intervalRef.current = setInterval(() => {
        setImageIndex(prevIndex => (prevIndex + 1) % images.length); // Cycle through images
      }, 3000); // Change image every 30 seconds
    }

    return () => clearInterval(intervalRef.current); // Cleanup on component unmount
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current); // Stop auto-switching when hovered
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Resume auto-switching when not hovered
  };

  return (
    <div className='banner-screen-container'>
      <div className='bannerscreen-header'>
        <Header />
      </div>
      
      <div className='hero-section-bannerscreen'>
        <div className='main-banner-container'>
          <div className='bannerscreen-header'>
            <h2>Insurance Services you can<br />always TRUST upon....</h2>
          </div>
     
        <div className='first-section'>
          
          <div
            className="banner-section"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
              <a href={bannerLinks[imageIndex]} target="_blank" rel="noopener noreferrer">
                <img
                  src={images[imageIndex]}
                  alt="vehicle"
                  className={`banner-image ${isHovered ? 'zoom' : ''}`}
                  style={{ cursor: 'pointer' }}
                />
              </a>
              <div className="banner-inside-text">
                {bannerTexts[imageIndex]}
              </div>
              <div className="banner-text">
                … A BUSINESS INITIATED BY A TEAM OF INSURANCE AND industry experts<br></br>
                WITH DECADES OF EXPERIENCE …
              </div>
          </div>
        </div>
        </div>
        <div className='second-section'>
          <div className='cloud-section'>
            <div className='cloud-content-section'>
              <h1 className='main-title'>I-Pro Infinity</h1>
              <h2 className='subtitle'>INSURE AND PROTECT</h2>
              <p className='subtext'>FEW CLICKS AWAY</p>
              <div className='arrow-container'>
                <div className='arrow left-arrow'></div>
                <div className='arrow left-arrow'></div>
                <div className='arrow left-arrow'></div>
                <div className='arrow left-arrow'></div>
              </div>

              <div className='icon-container'>
                <i className="fas fa-car iconss" onClick={() => navigate('/landing-screen')} style={{ cursor: 'pointer' }}></i>
                <i className="fas fa-motorcycle iconss" onClick={() => navigate('/landing-screen')} style={{ cursor: 'pointer' }}></i>
                <i className="fas fa-bus iconss" onClick={() => navigate('/landing-screen')} style={{ cursor: 'pointer' }}></i>
                <i className="fas fa-hand-holding-heart iconss" onClick={() => navigate('/landing-screen')} style={{ cursor: 'pointer' }}></i>
              </div>


              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bannerscreen;
