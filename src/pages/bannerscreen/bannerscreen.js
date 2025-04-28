import React from 'react';
import Header from '../../components/Header/header';
import Car from '../../assets/Car.jpg';
import heart from '../../assets/Heart.png';
import cloudimage from '../../assets/ChatGPT Image Apr 16, 2025, 12_35_32 PM 1.png';
import "./bannerscreen.css";

function Bannerscreen() {
  return (
    <div className='banner-screen-container'>
        <div className='bannerscreen-header'>
              <Header />
        </div>
        <div className='hero-section-bannerscreen'>
        <div className='first-section'>
          <div className="car-section">
            <img src={Car} alt='car-image' className='car-image'/>
          </div>

          <div className="heart-section">
            <img src={heart} alt='heart-image' className='heart-image'/>
          </div>
        </div>
        <div className='second-section'>
        <div className='cloud-section'>
           
            <div className='cloud-content-section'>
              <h1 className='main-title'>I-Pro Infinity</h1>
              <h2 className='subtitle'>INSURE AND PROTECT</h2>
              <p className='subtext'>FEW CLICKS AWAY</p>
              <div className='icon-row'>
                <i className="fas fa-car" style={{ color: '#007BC1' }}></i>
                <i className="fas fa-motorcycle" style={{ color: '#007BC1' }}></i>
                <i className="fas fa-bus" style={{ color: '#007BC1' }}></i>
                <span className='heart-hand'>
                  <i className="fas fa-hand-paper" style={{ color: 'yellow' }}></i>
                  <i className="fas fa-heart" style={{ color: 'red', marginLeft: '4px' }}></i>
                </span>
              </div>
            </div>
        </div>

        </div>

        </div>
            
        
    </div>
  )
}

export default Bannerscreen