import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import routes from 'routes';
import logo from 'assets/images/logo.png';
import Subscription from "components/Subscription";
import {getSocial} from "store/social/actions";
import {getOffices} from "store/offices/actions";
import nav from './navigation';
import {setUniqueOfficesArray} from "utils/setUniqueOfficesArray";

const Footer = () => {

    const dispatch = useDispatch();
    const socials = useSelector((state) => state.social.data);
    const offices = useSelector(state => state.offices.data);
    const [uniqCountries, setUniqCountries] = useState([]);

    useEffect(() => {
        if(!socials.length) {
            dispatch(getSocial());
        }
        if(!offices.length) {
            dispatch(getOffices());
        } else {
            setUniqCountries(setUniqueOfficesArray(offices));
        }
    }, [dispatch, offices]);

    const detectLink = (link) => {
        if(link.blank) {
            return <a href={link.url} target="_blank" className="link">{link.title}</a>
        }
        return <Link to={link.url} className="link">{link.title}</Link>;

    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Link to={routes.index} className="footer-logo">
                            <img src={logo} alt="Global Engineering Office" />
                        </Link>
                        <Subscription />
                    </div>
                    <div className="col-lg-6">
                        <h6 className="h-6">We believe in traditions and incorporate them within our innovations. Client is the soul of the project.</h6>
                        <div className="footer-nav">
                            <div className="footer-nav-item">
                                <p className="nav-title">Menu</p>
                                <ul>
                                    {
                                        nav.map((link, key) => (
                                            <li key={key}>
                                                <Link
                                                    to={link.url}
                                                    className="link">{link.title}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="footer-nav-item">
                                <p className="nav-title">Social</p>
                                <ul>
                                    {
                                        socials.map((network, key) => (
                                            <li key={key}>
                                                <a
                                                    href={network.url}
                                                    className="link"
                                                    target="_blank">{network.label}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="footer-nav-item">
                                <p className="nav-title">Offices</p>
                                <ul>
                                    {
                                        uniqCountries.map((country, key) => (
                                            <li key={key}>
                                                <Link
                                                    to={routes.contact}
                                                    className="link office-title">{country.replace('_', ' ')}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="copyright">
                            <p className="copyright-title">&copy; Copyright 2020 Global Engineering Office. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;