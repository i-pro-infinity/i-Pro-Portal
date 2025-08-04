import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header';
import Footer from "../../components/footer/footer";
import bluecar from "../../assets/Blue car (2).png";
import scooter from "../../assets/Scooter.png";
import commercial from "../../assets/Truck.png";
import handsonheart from "../../assets/handsonhearts.png";
import travel from "../../assets/Airplane Take Off.png";
import corporate from "../../assets/Business Building.png";
import homeloan from "../../assets/Real Estate.png";
import family from "../../assets/Defend Family.png";
import car from '../../assets/car-insurance-banner.png';
import scooty from '../../assets/bike-insurance-banner.png';
import Commercial from '../../assets/commercial-insurance-banner.png';
import health from '../../assets/health-insurance-banner.png';
import introVideo from '../../videos/Mysore City in 2024 - 4K Cinematic Drone Tour-inside-1754284286194-inside-1754284451465.mp4';

import "./bannerscreen.css";

function Bannerscreen() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedGrid, setSelectedGrid] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const [loading, setLoading] = useState(false); 
  const images = [car, scooty, Commercial, health];
  const bannerTexts = [
    "Car Insurance –Take a 4-wheeler insurance in a few simple steps",
    "Bike Insurance – Take a 2-wheeler insurance in a few simple steps",
    "Commercial Vehicle Insurance – Take a commercial insurance in a few steps",
    "Health Insurance – Take a health insurance policy in a few simple steps"
  ];
  const bannerLinks = ["/4-wheeler", "/2-wheeler", "/commercial-insurance", "/healthinsurance"];

  useEffect(() => {
    // Zoom-in on image load
    setIsHovered(true);

    // Allow zoom-out by removing zoom after 3.5s
    const zoomTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 2000);

    // Move to next image after 4s
    const imageTimeout = setTimeout(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearTimeout(zoomTimeout);
      clearTimeout(imageTimeout);
    };
  }, [imageIndex]);
    

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleGridClick = (gridType, route) => {
    const userSubmitted = localStorage.getItem('user_submitted');
    if (userSubmitted) {
      if (route.startsWith('http')) {
        window.location.href = route; // ✅ External link
      } else {
        navigate(route); // ✅ Internal route
      }
    } else {
      setSelectedGrid({ gridType, route });
      setShowModal(true);
    }
  };
  
  
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setShowModal(false);
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleSubmit = async () => {
    const { name, phone, email } = formData;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !phone || !email) {
      alert("All fields are required!");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const templateParams = { name, phone, email };

    try {
      setLoading(true); // 👈 Show loader

      await emailjs.send(
        'service_i4slxpl',
        'template_a8iyyag',
        templateParams,
        'egBE5VCYx3nBFWaNk'
      );

      const expiryInMs = 1000 * 60 * 60 * 24 * 180;
      const expiryTimestamp = new Date().getTime() + expiryInMs;
      localStorage.setItem('user_submitted', expiryTimestamp.toString());
      
      setShowModal(false);
      setFormData({ name: '', phone: '', email: '' });

      if (selectedGrid.route.startsWith('http')) {
        window.location.href = selectedGrid.route;
      } else {
        navigate(selectedGrid.route);
      }
    } catch (error) {
      alert("Failed to send email.");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false); // 👈 Hide loader
    }
  };

  return (
    <div className='banner-screen-container'>
      <div className='bannerscreen-header'>
        <Header />
      </div>
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="animated-content disappear-after-4s">
        <h1 className="brand-title">I-Pro Infinity</h1>
        <p className="tagline">Simple. Secure. Infinite.</p>
        <p className="subtext">The Foundation of Trust-Based Relationships</p>
      </div>

      {/* <div className='hero-section-bannerscreen'>
        <div className='main-banner-container'>
          <div className='bannerscreen-headertext'>
            <h2 className='insurance-service-main-title'>Insurance Services you can always TRUST upon....</h2>
          </div>

          <div className='first-section'>
            <div
              className="banner-section"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href={bannerLinks[imageIndex]}>
                <div className="image-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                  <img
                    src={images[imageIndex]}
                    alt="vehicle"
                    className={`banner-image ${isHovered ? 'zoom' : ''}`}
                    style={{ cursor: 'pointer', display: 'block' }}
                  />
                  <div
                    className="click-zone"
                    onClick={() => {
                      // Your click handler logic here
                      console.log('Center clicked!');
                    }}
                  ></div>
                </div>

              </a>
              <div className="banner-inside-text">
                {bannerTexts[imageIndex]}
              </div>
            </div>
          </div>
        </div>

        <div className='second-section'>
          <div className="landingscreen-grid">

            <div className="grid-wrapper">
              <div
                className="grid-box"
                onClick={() =>
                  handleGridClick('4-wheeler', 'https://uatweb.iproinfinity.com/carinsurance/')
                }
              >
                <img src={bluecar} alt="4 wheeler" className="icon-img" />
                <p className="grid-lable">Private Car</p>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="grid-box" onClick={() => handleGridClick('4-wheeler', 'https://uatweb.iproinfinity.com/bike-insurance/')}>
                <img src={scooter} alt="2 wheeler" className="icon-img" />
                <p className="grid-lable">Two Wheeler</p>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="grid-box" onClick={() => handleGridClick('4-wheeler', 'https://uatweb.iproinfinity.com/commercial-vehicle-insurance/#/')}>
                <img src={commercial} alt="Commercial" className="icon-img" />
                <p className="grid-lable">Commercial Vehicle</p>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="grid-box" onClick={() => handleGridClick('4-wheeler', 'https://uatweb.iproinfinity.com/healthinsurance/')}>
                <img src={handsonheart} alt="Health" className="icon-img" />
                <p className="grid-lable">Health</p>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="grid-box" onClick={() => handleGridClick('travel', '/travelinsurance')}>
                <img src={travel} className="icon-img" />
                <p className="grid-lable">Travel</p>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="grid-box" onClick={() => handleGridClick('travel', '/corporate')}>
                <img src={corporate} alt="Corporate" className="icon-img" />
                <p className="grid-lable">Corporate</p>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="grid-box" onClick={() => handleGridClick('Home', '/Homeisnurance')}>
                <img src={homeloan} alt="Home Insurance" className="icon-img" />
                <p className="grid-lable">Home Insurance</p>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="grid-box" onClick={() => handleGridClick('life', '/lifeinsurance')}>
                <img src={family} alt="Life Insurance" className="icon-img" />
                <p className="grid-lable">Life Insurance</p>
              </div>
            </div>

            {showModal && (
              <div className="modal-overlay">
                <div className="modal-box">
                  <h3>Enter your details</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="modal-buttons">
                    <button onClick={handleSubmit} disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner"></span> Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default Bannerscreen;
