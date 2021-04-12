import React from 'react';
import PropTypes from 'prop-types';
import {locoScroll} from "components/SmoothScroll";
import SplitTitle from "../SplitTitle";

const HeroInner = ({ title, label, toScroll }) => {

    return (
        <section className="section hero hero-inner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="hero-content">
                            <p className="label label-uppercase fade">{label}</p>
                            <SplitTitle>
                                <h1 className="h-1 hero-content-title split-title">{title}</h1>
                            </SplitTitle>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="follow follow-inner fade">
                            <button
                                className="follow-link"
                                onClick={() => locoScroll.scrollTo(`${toScroll}`, { duration: 500 })}>
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
                </div>
            </div>
        </section>
    )
};

export default HeroInner;

HeroInner.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string,
    toScroll: PropTypes.string.isRequired
};