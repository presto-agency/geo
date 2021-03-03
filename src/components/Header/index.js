import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {openModal} from "store/modal/actions";
import routes from 'routes';
import nav from './navigation';
import logo from 'assets/images/logo.png';
import searchIcon from 'assets/images/icons/loupe.svg';

const Header = () => {

    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setOpenNav(false);
        });
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-5">
                        <Link to={routes.index} className="header-logo">
                            <img src={logo} alt="Global Engineering Office" />
                        </Link>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-7">
                        <div className="header-nav">
                            <nav className={`nav ${openNav ? 'active': ''}`}>
                                {
                                    nav.map(link => (
                                        <NavLink
                                            key={link.url}
                                            to={link.url}
                                            className="link"
                                        >{link.title}</NavLink>
                                    ))
                                }
                            </nav>
                            <div className="header-nav-search">
                                <button className="link" onClick={() => dispatch(openModal('search'))}>
                                    <span className="link-icon">
                                        <img src={searchIcon} alt="Search" />
                                    </span>
                                    Search
                                </button>
                            </div>
                            <div className={`burger ${openNav ? 'active': ''}`} onClick={() => setOpenNav(!openNav)}>
                                <div className="burger-box">
                                    <div className="burger-box-arrow" />
                                    <div className="burger-box-arrow" />
                                    <div className="burger-box-arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 d-none d-lg-block">
                        <div className="header-cta">
                            <Link
                                to={routes.contact}
                                className={`link-btn ${pathname === '/' ? 'link-btn-white' : ''} `}
                            >Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;