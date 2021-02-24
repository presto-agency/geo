import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './styles';
import Marker from "./Marker";

const map = {
    options: {
        styles: styles,
        maxZoom: 15,
        gridSize: 50
    },
};
const KEY =  process.env.REACT_APP_GOOGLE_API_KEY;

const GoogleMap = () => {

    const [defaultOptions, setDefaultOptions] = useState({
        center: {
            lat: 24.7253981,
            lng: 46.2620301
        },
        zoom: 7
    });

    return (
        <div className="section google-map" id="google-map">
            <GoogleMapReact
                zoom={defaultOptions.zoom}
                center={defaultOptions.center}
                options={map.options}
                yesIWantToUseGoogleMapApiInternals
                scrollwhell={false}
                bootstrapURLKeys={{key: KEY}}>
                <Marker
                    lat={defaultOptions.center.lat}
                    lng={defaultOptions.center.lng} />
            </GoogleMapReact>
        </div>
    )
};

export default GoogleMap;