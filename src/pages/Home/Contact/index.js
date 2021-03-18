import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import routes from 'routes';

import FollowLink from "components/FollowLink";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import {getOffices} from "store/offices/actions";

const Contact = () => {

    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.offices);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getOffices());
        }
    }, [dispatch, data]);

    if(loading || isEmpty(data)) {
        return <Preloader />
    }

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
                            <div className="col-xl-3 offset-xl-1 col-lg-4 col-sm-6" key={key}>
                                <div className="contact-box">
                                    <div className="office fade-on-scroll">
                                        <p className="office-city">{office.country.replace('_', ' ')}</p>
                                        {
                                            office.phoneNumber !== '-'
                                            ? <p className="office-phone">T: {office.phoneNumber}</p>
                                            : null
                                        }
                                        {
                                            office.faxNumber !== '-'
                                            ? <p className="office-fax">F: {office.faxNumber}</p>
                                            : null
                                        }
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