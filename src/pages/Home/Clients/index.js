import React from 'react';
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";

const _baseURL = process.env.REACT_APP_API_URL;

const Clients = ({ data }) => {

    if(isEmpty(data)) {
        return <Preloader />
    }

    return (
        <section className="section clients">
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
                    data-scroll={true}
                    data-scroll-speed="7"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    {
                        data.map(logo => (
                            <div className="clients-list-item" key={logo.id}>
                                <img data-src={_baseURL + logo.url} alt={logo.hash} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Clients