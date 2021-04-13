import React from 'react';
import PropTypes from 'prop-types';


const ServicesTabs = ({ services, onClick }) => {
    return (
        <div></div>
    )
};

export default ServicesTabs;

ServicesTabs.propTypes = {
    onClick: PropTypes.func.isRequired,
    services: PropTypes.array.isRequired
};