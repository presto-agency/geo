import React from 'react';

const ServicesTab = ({ service, id }) => {
    return (
        <div className="services-tab">
            <svg width="100%" height="100%" viewBox="0 0 195 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="hexagon">
                <path d="M-4.26186e-06 84.5L48.75 0.0625284L146.25 0.0625241L195 84.5L146.25 168.937L48.75 168.937L-4.26186e-06 84.5Z" />
            </svg>
            <svg width="100%" height="100%" viewBox="0 0 195 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="hexagon active">
                <path d="M-4.26186e-06 84.5L48.75 0.0625284L146.25 0.0625241L195 84.5L146.25 168.937L48.75 168.937L-4.26186e-06 84.5Z" />
            </svg>
            <div className="services-tab-plus" />
            <p className="services-tab-numb">{id < 10 ? '0'+id : id} /</p>
            <p className="services-tab-title">{service.title}</p>
        </div>
    )
};

export default ServicesTab;