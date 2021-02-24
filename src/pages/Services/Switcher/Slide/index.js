import React from 'react';

const ServiceSlide = ({ service }) => {

    return (
        <div className="services-carousel-slide">
            <div className="row">
                <div className="col-xl-6">
                    <h4 className="services-title h-4">{service.title}</h4>
                </div>
                <div className="col-xl-6">
                    <ul className="services-description">
                        {
                            service.list.map((item, key) => <li key={key}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ServiceSlide;