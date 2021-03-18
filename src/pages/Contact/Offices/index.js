import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Map from "components/Map";

import {isEmpty} from "utils/detectEmptyObject";
import {getOffices} from "store/offices/actions";
import Preloader from "components/Preloader";

const _baseURL = process.env.REACT_APP_API_URL;

const Offices = () => {

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
        <section className="section offices" id="offices">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <h3
                            className="h-3 offices-title"
                            data-scroll={true}
                            data-scroll-sticky={true}
                            data-scroll-target="#offices"
                        >Offices</h3>
                    </div>
                    <div className="col-lg-10">
                        <div className="offices-list">
                            {
                                data.map((office,key) => (
                                    <div className="offices-list-box" key={key}>
                                        <div className="office">
                                            <div className="office-preview parallax">
                                                <img src={_baseURL + office.image.formats.large.url} alt={office.country} />
                                            </div>
                                            <div className="office-content fade-on-scroll">
                                                <div className="row">
                                                    <div className="col-xl-6">
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