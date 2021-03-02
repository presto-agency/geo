import React from 'react';
import list from './list';

const Services = () => {

    return (
        <section className="section services"
             data-scroll={true}
             data-scroll-id="home-services"
             data-scroll-repeat="true"
             data-scroll-call="services-moving"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Our services</p>
                    </div>
                </div>
            </div>
            <div className="services-list">
                <div
                    className="list-scroll horizontal-moving"
                    data-scroll={true}
                    data-scroll-speed="2"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    {
                        list.map((item, key) => <p className="services-list-item h-3" key={key}>{item.title}</p>)
                    }
                </div>
            </div>
            <div className="services-list __reverse">
                <div
                    className="list-scroll horizontal-moving"
                    data-scroll={true}
                    data-scroll-speed="1.5"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    {
                        list.map((item, key) => <p className="services-list-item h-3" key={key}>{item.title}</p>)
                    }
                </div>
            </div>
        </section>
    )
};

export default Services;