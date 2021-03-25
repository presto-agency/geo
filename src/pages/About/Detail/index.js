import React from 'react';
import { useSelector } from 'react-redux';
import list from './list';
import Counter from "components/Counter";

const Detail = () => {

    const { isVisible } = useSelector(state => state.about);

    return (
        <section className="section detail">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <h4 className="h-4 fade">Our firm has competent staff working in offices in the United Arab Emirates and Lebanon. At any one time, we have many projects running concurrently.</h4>
                        <div
                            className="detail-values fade"
                            id="about-detail-values"
                            data-scroll={true}
                            data-scroll-call="about-values"
                            data-scroll-offset="20%, 70%"
                            data-scroll-id="about-values"
                            data-scroll-repeat="false"
                        >
                            {
                                list.map((value, key) => (
                                    <div className="detail-values-box" key={key}>
                                        <div className="value">
                                            <p className="label-uppercase">{value.label}</p>
                                            <p className="value-title h-2">
                                                <Counter value={value.title} isVisible={isVisible} />
                                            </p>
                                            <p className="value-description">{value.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Detail;