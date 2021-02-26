import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

const AboutDetail = () => {
    return (
        <section
            className="section about"
            id="home-about"
            // data-scroll={true}
            // data-scroll-id="split-content-on-scroll"
            // data-scroll-repeat="false"
            // data-scroll-call="split-content-on-scroll"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 offset-xl-1">
                        <div className="about-title fade-on-scroll">
                            <h4 className="h-4">GEO is a firm of designers, engineers, planners and consultants providing a diverse range of professional services to clients around the middle-east.</h4>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="paragraph about-description fade-on-scroll">
                            <p>Our innovative and fully-integrated approach brings our full complement of skills and knowledge to bear on any given design problem. We exert a significant influence on the built environment and are the creative force behind many innovative and sustainable designs.</p>
                            <p>Our firm has competent staff working in offices in the United Arab Emirates and Lebanon. At any one time, we have many projects running concurrently.</p>
                            <Link to={routes.contact} className="link-btn">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutDetail;