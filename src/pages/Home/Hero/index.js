import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import HeroCarousel from './carousel';
import {locoScroll} from "components/SmoothScroll";
import SplitTitle from "components/SplitTitle";
import {setUniqueOfficesArray} from "utils/setUniqueOfficesArray";

const Hero = ({ data: { title, subTitle, topImages, offices } }) => {

    const [uniqCountries, setUniqCountries] = useState([]);

    useEffect(() => {
        if(!!offices) {
            setUniqCountries(setUniqueOfficesArray(offices));
        }
    }, [offices]);

    return (
        <section className="section hero">
            <HeroCarousel defaultImages={topImages} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="hero-content">
                            <p className="label label-uppercase fade">{subTitle}</p>
                            <h1 className="h-1 hero-content-title split-text">
                                <SplitTitle>{title}</SplitTitle>
                            </h1>
                        </div>
                        <div className="follow fade">
                            <button
                                className="follow-link"
                                onClick={() => locoScroll.scrollTo('#home-about', { duration: 500 })}>
                                <svg viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M20.1309 18.1435L18.9727 17.0299L13.819 21.9853L13.819 -2.75899e-07L12.1811 -3.47495e-07L12.1811 21.9853L7.02748 17.0299L5.8693 18.1435L13.0001 25L20.1309 18.1435Z" />
                                        <rect x="4.67981" width="8.32" height="1.53061" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="25" height="26" transform="translate(26) rotate(90)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="hero-detail">
                            <div className="hero-offices fade">
                                <p className="hero-offices-title">Our offices:</p>
                                <div className="hero-offices-list">
                                    {
                                        uniqCountries.map((country, key) => (
                                            <span className="hero-office-title" key={key}>{country}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;

Hero.propTypes = {
    data: PropTypes.object.isRequired
};