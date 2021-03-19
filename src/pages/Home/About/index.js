import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

const AboutDetail = ({ data: { leftDescription, rightDescription } }) => {;
    return (
        <section className="section about" id="home-about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="about-title fade-on-scroll">
                            <h4 className="h-4">{leftDescription}</h4>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="paragraph about-description fade-on-scroll">
                            <p>{rightDescription}</p>
                            <Link to={routes.contact} className="link-btn">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutDetail;