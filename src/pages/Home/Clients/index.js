import React from 'react';
import Preloader from "components/Preloader";

const Clients = ({ defaultLogos, webpLogos, baseUrl }) => {

    if(!defaultLogos.length) {
        return <Preloader />
    }

    return (
        <section className="section clients"
                 id="clients"
                 data-scroll={true}
                 data-scroll-id="home-clients"
                 data-scroll-repeat="true"
                 data-scroll-call="clients-moving">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Trusted by</p>
                    </div>
                </div>
            </div>
            <div className="clients-overlay">
                <div
                    className="clients-list horizontal-moving"
                    // data-scroll={true}
                    // data-scroll-speed="7"
                    // data-scroll-position="top"
                    // data-scroll-direction="horizontal"
                >
                    {
                        defaultLogos.map((logo, key) => (
                            <div className="clients-list-item" key={key}>
                                <picture>
                                    {
                                        !!webpLogos[key].url
                                        ? <source srcSet={baseUrl + webpLogos[key].url} type="image/webp" />
                                        : null
                                    }
                                    <source srcSet={baseUrl + logo.url} type="image/png" />
                                    <img src={baseUrl + logo.url} alt={logo.name} />
                                </picture>
                            </div>
                        ))
                    }
                    {
                        defaultLogos.map((logo, key) => (
                            <div className="clients-list-item" key={key}>
                                <picture>
                                    {
                                        !!webpLogos[key].url
                                            ? <source srcSet={baseUrl + webpLogos[key].url} type="image/webp" />
                                            : null
                                    }
                                    <source srcSet={baseUrl + logo.url} type="image/png" />
                                    <img src={baseUrl + logo.url} alt={logo.name} />
                                </picture>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Clients;