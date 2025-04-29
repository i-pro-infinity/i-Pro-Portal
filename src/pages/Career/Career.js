import React from 'react'
import Header from '../../components/Header/header';
import careerimage from '../../assets/career-image.jpg'
import './Career.css'

    const CareerPage = () => {
        return (
            <div className="career-container">
            <Header/>
            <div className='beach-background'>
                <div className="career-header">
                    <img
                        src={careerimage}
                        alt="Career Banner"
                        className="career-banner"
                    />
                </div>
                </div>
                <div className="career-content">
                    <h2>Careers – Join Our Insurance Sales Team</h2>
                    <ul>
                        <li>We're expanding our Insurance Sales Team and are looking for passionate, goal-oriented individuals.</li>
                        <li>If you're motivated, love helping people, and enjoy working in a dynamic environment, this is the place for you.</li>
                        <li>At our company, we value dedication, teamwork, and a drive to succeed.</li>
                        <li>Whether you're experienced or just starting out, we welcome talent from all backgrounds.</li>
                        <li>You'll have the opportunity to grow your career while making a real impact in customers' lives.</li>
                        <li>Great incentives, training programs, and a supportive team await you.</li>
                        <li>Submit your details below to take the first step toward a fulfilling career with us.</li>
                        <li>We’re excited to meet you – your journey in insurance sales begins here!</li>
                    </ul>
                </div>


                <div className="career-form-section">
                    <h3>Please fill out the form below to apply:</h3>
                    <form className="career-form">
                        <div className="form-row">
                            <input type="text" placeholder="Name" required />
                            <input type="tel" placeholder="Phone Number" required />
                        </div>

                        <div className="form-row">
                            <input type="email" placeholder="Email ID" required />
                            <input type="file" />
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        );
    };

export default CareerPage