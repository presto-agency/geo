import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import logo from 'assets/images/logo.png';
import Subscription from "components/Subscription";
import nav from './navigation';

const Footer = () => {

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
                    <div className="col-xl-6">
                        <Link to={routes.index} className="footer-logo">
                            <img src={logo} alt="Global Engineering Office" />
                        </Link>
                        <Subscription />
                    </div>
                    <div className="col-xl-6">
                        <h6 className="h-6">We believe in traditions and incorporate them within our innovations. Client is the soul of the project.</h6>
                        <div className="footer-nav">
                            {
                                nav.map((list, key) => (
                                    <div key={key} className="footer-nav-item">
                                        <p className="nav-title">{list.title}</p>
                                        <ul>
                                            {
                                                list.list.map((link, key) => (
                                                    <li key={key}>{detectLink(link)}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
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