import React from 'react';
import { useSelector } from 'react-redux';
import routes from 'routes';
import FollowLink from "components/FollowLink";

const Contact = () => {

    const { data } = useSelector(state => state.offices);

    return (
        <section className="section contact">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Contact us</p>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map((office, key) => (
                            <div className="col-xl-3 offset-xl-1" key={key}>
                                <div className="contact-box">
                                    <div className="office fade-on-scroll">
                                        <p className="office-city">{office.city}</p>
                                        <p className="office-phone">T: {office.phone}</p>
                                        <p className="office-fax">F: {office.fax}</p>
                                        <p className="office-address">{office.address}</p>
                                        <a href={`mailto:${office.email}`} className="office-email">{office.email}</a>
                                        <br />
                                        <FollowLink to={routes.contact} title="view on map" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Contact;