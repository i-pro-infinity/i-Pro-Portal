import React from 'react';
import './whyiproinfinity.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/header';
import whatmakeusdiffernt from '../../assets/whatmakeusdiffernt.png';
// import differenceimg from '../../image/differenceimg.png';

const DifferenceSection = () => {
    return (
        <div className="difference-section">
            <Header />
            <div className="difference-content">
                <div className="difference-text">
                    {/* NEW PARAGRAPH ADDED HERE */}
                    <h2>
                        WHY DO YOU NEED AN INSURANCE BROKER?<br /> </h2>
                       
                    <p>The world of insurance is complex and ever-changing. The insurance covers provided by the policy you bought last year may no longer be suitable or sufficient for your needs. You may not know that the quoted premiums are competitive? And if you are just starting out or expanding your business, how do you know what types of insurance you need? And if the insurance you buy is good enough to protect your business against the risk exposures? A well experienced and suitably qualified professional can help assess and source the types and levels of cover that you need, saving you the trouble and effort. The consequences of not having the right insurance in place can be disastrous, and sometimes this only comes to light when you need to make a claim, which might be too late.</p>
                   

                    <h2>What Makes Us Different</h2>
                    <p>
                        People make all the difference. We are a team of passionate and mature professionals with years of experience, having seen the ups and downs in life.
                        The experience, expertise, and enthusiasm of our team is something that our clients truly benefit from.
                    </p>
                    <ul>
                        <li>
                            <strong>Dedicated Claims Management:</strong> We have a dedicated and experienced claims management team. Our experts understand your business and the risks associated with it, enabling us to arrange appropriate insurance protection.
                        </li>
                        <li>
                            <strong>Client Continuity:</strong> We aim to provide stability and continuity to our client relationships in a world full of uncertainties. Our clients appreciate and value this consistency.
                        </li>
                        <li>
                            <strong>Innovation through Technology:</strong> We are a progressive and ambitious team, continually looking for ways to improve our service by embedding technology wherever feasible.
                        </li>
                        <li>
                            <strong>Committed to Growth:</strong> We are here to stay and growing. We recruit and retain talented, committed, and motivated individuals, nurturing their knowledge and expertise to meet your needs.
                        </li>
                        <li>
                            <strong>Core Values:</strong> We live by our core values: customer first, integrity, professionalism, respect, and teamwork.
                        </li>
                    </ul>
                    <p>
                        The unfortunate point at which a client has to make a claim is the true moment of truth. It’s the time when an insurer must promptly deliver the agreed benefits to minimize loss and disruption. This is what we promise and deliver — at <strong>i-Pro</strong>.
                    </p>
                </div>
                <div className="difference-image">
                    <img src={whatmakeusdiffernt} alt="Our Team" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DifferenceSection;
