import React from 'react';
import HeroCarousel from './carousel';
import iconDown from 'assets/images/icons/arrow-down.svg';

const Hero = () => {
    return (
        <section className="section hero">
            <HeroCarousel />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="hero-content">
                            <p className="label label-uppercase">Welcome we are</p>
                            <h1 className="h-1 hero-content-title">Global Engineering Office</h1>
                        </div>
                        <div className="follow">
                            <button className="follow-link">
                                <img src={iconDown} alt="Follow" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="hero-detail">
                            <div className="hero-offices">
                                <p className="hero-offices-title">Our offices:</p>
                                <div className="hero-offices-list">
                                    <span className="hero-office-title">UAE</span>
                                    <span className="hero-office-title">Abu Dhabi Branch</span>
                                    <span className="hero-office-title">Lebanon</span>
                                    <span className="hero-office-title">Egypt</span>
                                    <span className="hero-office-title">KSA</span>
                                    <span className="hero-office-title">Iraq</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;