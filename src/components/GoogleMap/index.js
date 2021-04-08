import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// import Geocode from "react-geocode";
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

// Geocode.setApiKey('AIzaSyB1iaIIXz46FOxfDQ3veVtju7t1K8VQVgk');
// Geocode.fromAddress('Dubai South').then(
//     (response) => {
//         const { lat, lng } = response.results[0].geometry.location;
//         console.log(lat, lng);
//     },
//     (error) => {
//         console.error(error);
//     }
// );

const GoogleMap = () => {

    const [defaultOptions, setDefaultOptions] = useState({
        center: {
            lat: 24,
            lng: 54
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