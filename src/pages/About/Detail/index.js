import React from 'react';
import list from './list';

const Detail = () => {
    return (
        <section className="section detail">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <h4 className="h-4">Our firm has competent staff working in offices in the United Arab Emirates and Lebanon. At any one time, we have many projects running concurrently.</h4>
                        <div className="detail-values" id="about-detail-values">
                            {
                                list.map((value, key) => (
                                    <div className="detail-values-box" key={key}>
                                        <div className="value">
                                            <p className="label-uppercase">{value.label}</p>
                                            <p className="value-title h-2">{value.title}</p>
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