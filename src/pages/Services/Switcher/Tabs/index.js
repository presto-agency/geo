import React from 'react';
import { useDispatch } from 'react-redux';
import ServicesTab from "../Tab";
import {moveServicesCarousel} from "store/services/actions";

const ServicesTabs = ({ services }) => {

    const dispatch = useDispatch();

    const handleCarouselMove = (id) => {
        dispatch(moveServicesCarousel(id));
    };

    return (
        <div className="services-tabs">
            {
                services.map((service, key) => (
                    <div className="services-tabs-item" key={key} onClick={() => handleCarouselMove(key)}>
                        <ServicesTab service={service} id={key+1} />
                    </div>
                ))
            }
        </div>
    )
};

export default ServicesTabs;