import React from 'react';
import markerIcon from 'assets/images/icons/marker.svg';

const Marker = () => {
    return (
        <div className="marker">
            <img src={markerIcon} alt="Marker" />
        </div>
    )
};

export default Marker;