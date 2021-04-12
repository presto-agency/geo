import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Counter from "components/Counter";

const Detail = ({ data: {
    description,
    peapleCount, peopleDescription, peopleSuffix,
    yearsCount, yearsDescription,
    globalReachCount,
    globalReachDescription,
    growthCount, growthDescription, growthSufiix } }) => {

    const { isVisible } = useSelector(state => state.about);

    return (
        <section className="section detail">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <h4 className="h-4 fade">{description}</h4>
                        <div
                            className="detail-values fade"
                            id="about-detail-values"
                            data-scroll={true}
                            data-scroll-call="about-values"
                            data-scroll-offset="20%, 70%"
                            data-scroll-id="about-values"
                            data-scroll-repeat="false"
                        >
                            <div className="detail-values-box">
                                <div className="value">
                                    <p className="label-uppercase">People</p>
                                    <p className="value-title h-2">
                                        <Counter value={peapleCount} isVisible={isVisible} />
                                        {peopleSuffix}
                                    </p>
                                    <p className="value-description">{peopleDescription}</p>
                                </div>
                            </div>
                            <div className="detail-values-box">
                                <div className="value">
                                    <p className="label-uppercase">Years</p>
                                    <p className="value-title h-2">
                                        <Counter value={yearsCount} isVisible={isVisible} />
                                    </p>
                                    <p className="value-description">{yearsDescription}</p>
                                </div>
                            </div>
                            <div className="detail-values-box">
                                <div className="value">
                                    <p className="label-uppercase">Global reach</p>
                                    <p className="value-title h-2">
                                        <Counter value={globalReachCount} isVisible={isVisible} />
                                    </p>
                                    <p className="value-description">{globalReachDescription}</p>
                                </div>
                            </div>
                            <div className="detail-values-box">
                                <div className="value">
                                    <p className="label-uppercase">Growth</p>
                                    <p className="value-title h-2">
                                        <Counter value={growthCount} isVisible={isVisible} />
                                        {growthSufiix}
                                    </p>
                                    <p className="value-description">{growthDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Detail;

Detail.propTypes = {
    data: PropTypes.object
};