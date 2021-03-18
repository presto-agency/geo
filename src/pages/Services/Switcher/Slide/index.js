import React from 'react';
import PropTypes from 'prop-types';

const ServiceSlide = ({ service }) => {

    return (
        <div className="services-carousel-slide">
            <div className="row">
                <div className="col-xl-5 col-lg-5">
                    <h4 className="services-title h-4">{service.name}</h4>
                </div>
                <div className="col-xl-7 col-lg-7">
                    <ul className="services-description">
                        {
                            service.disciplines.map((discipline, key) => <li key={key}>{discipline.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ServiceSlide;

ServiceSlide.propTypes = {
    service: PropTypes.object.isRequired
};