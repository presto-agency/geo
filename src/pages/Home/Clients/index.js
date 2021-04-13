import React from 'react';
// import {isEmpty} from "utils/detectEmptyObject";
// import Preloader from "components/Preloader";

import amazon from 'assets/images/clients/AMAZON.webp';
import amazonPng from 'assets/images/clients/AMAZON.png';
import aramex from 'assets/images/clients/aramex-logo.webp';
import aramexPng from 'assets/images/clients/aramex-logo.png';
import caterpillar from 'assets/images/clients/Caterpillar.webp';
import caterpillarPng from 'assets/images/clients/Caterpillar.png';
import dewa from 'assets/images/clients/DEWA.webp';
import dewaPng from 'assets/images/clients/DEWA.png';
import dpworld from 'assets/images/clients/DPWorld-Brand-Identity_DUAL_CMYK.webp';
import dpworldPng from 'assets/images/clients/DPWorld-Brand-Identity_DUAL_CMYK.png';
import dubais from 'assets/images/clients/Dubai_South-Logo.webp';
import dubaisPng from 'assets/images/clients/Dubai_South-Logo.png';
import emiratesf from 'assets/images/clients/Emirates_Flight_Catering.webp';
import emiratesfPng from 'assets/images/clients/Emirates_Flight_Catering.png';
import mobis from 'assets/images/clients/Hyundai_Mobis-Logo.webp';
import mobisPng from 'assets/images/clients/Hyundai_Mobis-Logo.png';
import kizad from 'assets/images/clients/Kizad-logo-black-on-white-1.webp';
import kizadPng from 'assets/images/clients/Kizad-logo-black-on-white-1.png';
import man from 'assets/images/clients/MAN_Diesel.webp';
import manPng from 'assets/images/clients/MAN_Diesel.png';

// const _baseURL = process.env.REACT_APP_API_URL;

const Clients = ({ data }) => {

    // if(isEmpty(data)) {
    //     return <Preloader />
    // }

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
                    {/*{*/}
                    {/*    data.map(logo => (*/}
                    {/*        <div className="clients-list-item" key={logo.id}>*/}
                    {/*            <img src={_baseURL + logo.url} alt={logo.hash} />*/}
                    {/*        </div>*/}
                    {/*    ))*/}
                    {/*}*/}
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={amazon} type="image/webp" />
                            <source srcSet={amazonPng} type="image/png" />
                            <img src={amazonPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={aramex} type="image/webp" />
                            <source srcSet={aramexPng} type="image/png" />
                            <img src={aramexPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={caterpillar} type="image/webp" />
                            <source srcSet={caterpillarPng} type="image/png" />
                            <img src={caterpillarPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={dewa} type="image/webp" />
                            <source srcSet={dewaPng} type="image/png" />
                            <img src={dewaPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={dpworld} type="image/webp" />
                            <source srcSet={dpworldPng} type="image/png" />
                            <img src={dpworldPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={dubais} type="image/webp" />
                            <source srcSet={dubaisPng} type="image/png" />
                            <img src={dubaisPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={emiratesf} type="image/webp" />
                            <source srcSet={emiratesfPng} type="image/png" />
                            <img src={emiratesfPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={mobis} type="image/webp" />
                            <source srcSet={mobisPng} type="image/png" />
                            <img src={mobisPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={kizad} type="image/webp" />
                            <source srcSet={kizadPng} type="image/png" />
                            <img src={kizadPng} alt="" />
                        </picture>
                    </div>
                    <div className="clients-list-item">
                        <picture>
                            <source srcSet={man} type="image/webp" />
                            <source srcSet={manPng} type="image/png" />
                            <img src={manPng} alt="" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Clients