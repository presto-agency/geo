import React from 'react';

const SomeDescription = ({ data: { name, description } }) => {
    return (
        <section className="section project-page-description">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 offset-xl-1">
                        <h4 className="h-4 fade-on-scroll">{name}</h4>
                    </div>
                    <div className="col-xl-5 fade-on-scroll">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SomeDescription;