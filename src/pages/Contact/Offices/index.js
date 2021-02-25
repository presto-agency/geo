import React from 'react';
import { useSelector } from 'react-redux';
import Map from "components/Map";

const Offices = () => {

    const { data } = useSelector(state => state.offices);

    return (
        <section className="section offices" id="offices">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2">
                        <h3
                            className="h-3 offices-title"
                            data-scroll={true}
                            data-scroll-sticky={true}
                            data-scroll-target="#offices"
                        >Offices</h3>
                    </div>
                    <div className="col-xl-10">
                        <div className="offices-list">
                            {
                                data.map((office,key) => (
                                    <div className="offices-list-box" key={key}>
                                        <div className="office parallax">
                                            <div className="office-preview">
                                                <img src={office.preview} alt={office.city} />
                                            </div>
                                            <div className="office-content">
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <p className="office-city">{office.city}</p>
                                                        <p className="office-phone">T: {office.phone}</p>
                                                        <p className="office-fax">F: {office.fax}</p>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <p className="office-address">{office.address}</p>
                                                        <a href={`mailto:${office.email}`} className="office-email">{office.email}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Offices;