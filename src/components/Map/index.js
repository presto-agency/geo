import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {isEmpty} from "utils/detectEmptyObject";
import {getOffices} from "store/offices/actions";
import Preloader from "components/Preloader";
import {setUniqueOfficesArray} from "utils/setUniqueOfficesArray";
import USAContinent from "./USAContinent";
import UKContinent from "./UKContinent";
import MiddleEast from "./MiddleEast";

const continents = [
    // {
    //     id: 'c0',
    //     title: 'USA',
    // },
    {
        id: 'c1',
        title: 'United kingdom',
        countries: ['united_kingdom']
    },
    {
        id: 'c2',
        title: 'Middle East',
        countries: ['uae', 'lebanon', 'saudi_arabia', 'egypt']
    }
];

const Map = () => {

    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.offices);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [uniqCountries, setUniqCountries] = useState([]);
    const [selectedContinent, setSelectedContinent] = useState(continents[1]);

    const handleHover = (country) => {
        setSelectedCountry(country);
    };

    const handleLeave = () => {
        setSelectedCountry('');
    };

    const detectContinent = (continentId) => {
        switch (continentId) {
            case 'c0':
                return <USAContinent
                  handleHover={handleHover}
                  handleLeave={handleLeave}
                  selectedCountry={selectedCountry}
                />;
            case 'c1':
                return <UKContinent
                  handleHover={handleHover}
                  handleLeave={handleLeave}
                  selectedCountry={selectedCountry}
                />;
            case 'c2':
                return <MiddleEast
                  handleHover={handleHover}
                  handleLeave={handleLeave}
                  selectedCountry={selectedCountry}
                />;
        }
    };

    useEffect(() => {
        if(!data.length) {
            dispatch(getOffices());
        } else {
            setUniqCountries(setUniqueOfficesArray(data));
        }
    }, [dispatch, data]);

    if(loading || isEmpty(data)) {
        return <Preloader />
    }

    return (
      <div className="map-wrapper">
        <p className="label fade-on-scroll">Where we work</p>
        <div className="map-tabs">
            {continents.map((continent, index) => (
              <div
                key={index}
                className={`map-tabs-item ${continent.id === selectedContinent.id ? 'is-active' : ''}`}
                onClick={() => setSelectedContinent(continent)}
              >
                  {continent.title}
              </div>
            ))}
        </div>
        <div
          className={`map ${selectedContinent.title.toLowerCase().replace(' ', '_')}`}
          data-scroll={true}
          data-scroll-id="map"
          data-scroll-repeat="false"
          data-scroll-call="map"
        >
            {detectContinent(selectedContinent.id)}
            <div className="map-offices">
              <p className="label label-uppercase">Our offices</p>
              <ul className="map-offices-list">
                  {
                    selectedContinent.countries.map((country, key) => (
                        <li
                          className={`map-offices-btn ${selectedCountry.toLowerCase() === country ? 'active' : ''}`}
                          key={key}
                          onMouseEnter={() => handleHover(country)}
                          onMouseLeave={() => handleLeave()}
                        >
                            {country.toUpperCase().replace('_', ' ')}
                            {
                                data.filter(office => office.country === country.toUpperCase()).map((office, key) => (
                                  <p key={key}>{office.address}</p>
                                ))
                            }
                        </li>
                      ))
                  }
              </ul>
            </div>
        </div>
      </div>
    )
};

export default Map;