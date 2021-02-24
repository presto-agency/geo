import React from 'react';
import Map from "components/Map";

const WhereWeWork = () => {
    return (
        <section className="section where-we-work">
            <div className="container">
                <div className="row">
                    <div className="col-xl-11 offset-xl-1">
                        <p className="label">Where we work</p>
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WhereWeWork;