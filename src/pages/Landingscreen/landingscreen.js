import React from "react";
import Header from "../../components/Header/header";
import landingimage from "../../assets/landingscreen-image.jpeg";
import bluecar from "../../assets/Blue car (2).png";
import scooter from "../../assets/Scooter.png";
import commercial from "../../assets/Truck.png";
import handsonheart from "../../assets/handsonhearts.png";
import travel from "../../assets/Airplane Take Off.png";
import corporate from "../../assets/Business Building.png";
import homeloan from "../../assets/Real Estate.png";
import family from "../../assets/Defend Family.png";
import fLower from "../../assets/Flower Bouquet.png";
import "./landingscreen.css";
import Footer from "../../components/footer/footer";
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle } from "react-icons/fa";


function LandingScreen () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/4-wheeler');  // Navigate to the /4-wheeler screen
    };

    return (
   <div className="Landingscreen-container">
        <div className="header-section-for-landingpage">
        <Header/>
                
        </div>
            <div className='landing-screen-background'> </div>
            
            <div className="herosection-landingscreen">
            <div className="section1-landingscreen">
                    <div className="i-proheading">
                        <h1 className="i-pro-heading"> iProInfinity – Where Trust Meets Innovation, Because We Care!</h1>
                    </div>   
                    
                <img src={landingimage} alt="landing-image" className="landingscreen-image"/>
            </div>  
            <div className="section2-landingscreen">
            <div className="landingscreen-grid">
                        <div className="grid-wrapper">
                            <div
                                className="grid-box"
                                onClick={() => window.open('https://uatweb.iproinfinity.com/carinsurance/', '_blank')}
                            >
                                <img src={bluecar} alt="4 wheeler" className="icon-img" />
                                <p>4 wheeler</p>
                            </div>

                            <div className="info-icon" onClick={handleClick}><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                            <div className="grid-box"
                                onClick={() => window.open('https://uatweb.iproinfinity.com/bike-insurance/', '_blank')}
                            >
                            <img src={scooter} alt="2 wheeler" className="icon-img" />
                            <p>2 wheeler</p></div>
                            <div className="info-icon"><FaInfoCircle /></div>
                            </div>
                        <div className="grid-wrapper">
                        <div className="grid-box"
                                onClick={() => window.open('https://uatweb.iproinfinity.com/commercial-vehicle-insurance/#/', '_blank')}
                        >
                        <img src={commercial} alt="4 wheeler" className="icon-img" />
                                <p>Commercial Vehicle</p></div>
                        <div className="info-icon"><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box"
                                onClick={() => window.open('https://uatweb.iproinfinity.com/healthinsurance/', '_blank')}
                                >
                        <img src={handsonheart} alt="4 wheeler" className="icon-img" />
                        <p>Health</p></div>
                            <div className="info-icon"><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box">
                        <img src={travel} alt="4 wheeler" className="icon-img" />
                        <p>Travel</p></div>
                        <div className="info-icon"><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box">
                        <img src={corporate} alt="4 wheeler" className="icon-img" />
                        <p>Corporate</p></div>
                        <div className="info-icon"><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box">
                        <img src={homeloan} alt="4 wheeler" className="icon-img" />
                        <p>Home Insurance</p></div>
                            <div className="info-icon"><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box">
                        <img src={family} alt="4 wheeler" className="icon-img" />
                        <p>Life Insurance</p>
                        </div>
                        <div className="info-icon"><FaInfoCircle /></div>
                        </div>
            </div>

                    <div className="rectangle-box">
                        <img src={fLower} alt="decor" className="decor-icon" />
                        <p>Check out the corporate insurance plan.</p>
                        <img src={corporate} alt="icon" className="decor-icon" />
                    </div>
            </div>    
                
            </div>
            <Footer />
           
   </div>
 
    )
}


export default LandingScreen;
