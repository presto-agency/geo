import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import routes from 'routes';
import nav from './navigation';
import logo from 'assets/images/logo.png';
import searchIcon from 'assets/images/icons/loupe.svg';

const Header = () => {

    const { pathname } = useLocation();

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2">
                        <Link to={routes.index} className="header-logo">
                            <img src={logo} alt="Global Engineering Office" />
                        </Link>
                    </div>
                    <div className="col-xl-8">
                        <div className="header-nav">
                            <nav className="nav">
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
                                <Link className="link" to={routes.search}>
                                    <span className="link-icon">
                                        <img src={searchIcon} alt="Search" />
                                    </span>
                                    Search
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
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