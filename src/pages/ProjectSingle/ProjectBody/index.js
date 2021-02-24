import React from 'react';
import locationIcon from 'assets/images/icons/location.svg';
import clientIcon from 'assets/images/icons/client.svg';
import squareIcon from 'assets/images/icons/square.svg';
import factsIcon from 'assets/images/icons/facts.svg';
import areaIcon from 'assets/images/icons/area.svg';
import ProjectPageCarousel from "./Carousel";

const ProjectBody = () => {
    return (
        <section className="section project-page">
            <div className="project-page-banner">
                <img
                    src="https://images.unsplash.com/photo-1441040744088-a70b8213d4d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt=""
                    data-scroll={true}
                    data-scroll-speed="-2"
                    data-scroll-position="center"
                />
            </div>
            <div className="project-page-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h3 className="h-3">Key facts</h3>
                            <hr className="hr"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 offset-xl-1">
                            <div className="project-facts">
                                <div className="project-facts-item">
                                    <div className="project-fact-icon">
                                        <img src={locationIcon} alt="Location" />
                                    </div>
                                    <p className="label-uppercase">Location</p>
                                    <p className="project-fact-value">Riyadh, KSA</p>
                                </div>
                                <div className="project-facts-item">
                                    <div className="project-fact-icon">
                                        <img src={clientIcon} alt="Client" />
                                    </div>
                                    <p className="label-uppercase">Client</p>
                                    <p className="project-fact-value">H. E. Mohammed Khalifa Bin Yousef Alsuwaidi</p>
                                </div>
                                <div className="project-facts-item">
                                    <div className="project-fact-icon">
                                        <img src={squareIcon} alt="BUA" />
                                    </div>
                                    <p className="label-uppercase">BUA</p>
                                    <p className="project-fact-value">13,924,000 m<sup>2</sup></p>
                                </div>
                                <div className="project-facts-item">
                                    <div className="project-fact-icon">
                                        <img src={factsIcon} alt="Key facts" />
                                    </div>
                                    <p className="label-uppercase">Key facts</p>
                                    <ul className="project-fact-value">
                                        <li>30,000 villa</li>
                                        <li>30,000 residential unit</li>
                                        <li>290 hotel rooms</li>
                                    </ul>
                                </div>
                                <div className="project-facts-item">
                                    <div className="project-fact-icon">
                                        <img src={areaIcon} alt="Plot area" />
                                    </div>
                                    <p className="label-uppercase">Plot area</p>
                                    <p className="project-fact-value">10,000,000 m<sup>2</sup></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="project-fact-description">
                                <p>A full fledged city designed around an Olympic Village designed to cater for a future prospect to hold the world summer Olympics in KSA. The city contains more than 30,000 villa, 30,000 residential unit, a five star hotel, a mega mall, 700,000 sqm of office space and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <ProjectPageCarousel />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProjectBody;