import React from 'react';
import ServicesTab from "../Tab";

const ServicesTabs = ({ services, onClick }) => {

    return (
        <div className="services-tabs">
            {
                services.map((service, key) => (
                    <div className="services-tabs-item" key={key} onClick={() => onClick(key)}>
                        <ServicesTab service={service} id={key+1} />
                    </div>
                ))
            }
        </div>
    )
};

export default ServicesTabs;