import React from 'react';
import carimage from '../../assets/car-information-image.png';
import carimage1 from '../../assets/Rectangle 781.png';
import carimage2 from '../../assets/Rectangle 782.png'
import Header from '../../components/Header/header';
import './car-information.css';


function Carinformation() {
  return (
    <div className='Carinformation-container'>
    <Header/>
    <div className='herosection-carinfomation'>
        <div className='car-information-image'>
        <img src={carimage} alt='car-information-image' className='car-image'/>
        </div>

              <div className="car-information-firstpara" style={{ textAlign: "left" }}>
                  <h1>What is Private Cars Insurance?</h1>
                  <p>
                      Private car insurance is a type of motor insurance policy that covers your personal car. <br />
                      This insurance policy will cover you financially against the losses <br />
                      that arise due to an accident, natural calamity, theft, or fire. <br />
                      A comprehensive car insurance cover offers the highest level of financial security to your car by covering <br />
                      almost all types of damages that your car may sustain.
                  </p>
              </div>

    </div>

          <div className="quote-container">
              <a
                  href="https://uatweb.iproinfinity.com/carinsurance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blinking-button"
              >
                  Get Quote
              </a>
          </div>
<br></br>
          <div className='backgroundsection-carinformation'>
          <br></br>
              <div className='bacground-sec-heading'>Private Car - New Vehicle Insurance</div>
              <div className='carimages-carinformation-screen'>
              <div className='carimages1'>
                  <img src={carimage1} alt=" " className='carimage1' />
                      <p>
                          New Vehicle Insurance Policy is a specialized insurance coverage designed for brand-new cars.<br></br> It offers comprehensive protection against various risks and damages that may occur during the initial period <br></br>of owning a new vehicle.

                      </p> 
              </div>
                  <img src={carimage2} alt=" " className='carimage1' />
              </div>
          </div>
    </div>
  )
}

export default Carinformation