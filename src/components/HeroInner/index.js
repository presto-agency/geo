import React from 'react';
import PropTypes from 'prop-types';
import iconDown from 'assets/images/icons/arrow-down.svg';
import {locoScroll} from "components/SmoothScroll";

const HeroInner = ({ title, label, toScroll }) => {

    return (
        <section className="section hero hero-inner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="hero-content">
                            <p className="label label-uppercase">{label}</p>
                            <h1 className="h-1 hero-content-title split-title">{title}</h1>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="follow follow-inner">
                            <button
                                className="follow-link"
                                onClick={() => locoScroll.scrollTo(`${toScroll}`, { duration: 500 })}>
                                <img src={iconDown} alt="Follow" />
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