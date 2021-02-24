import React from 'react';
import { Link } from 'react-router-dom';
import houston from 'assets/images/houston.jpg';
import routes from 'routes';

const PageNotFound = () => {
    return (
        <div className="page page-not-found">
            <section className="section pnf">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="pnf-content">
                                <h2 className="pnf-content-title h-2">Houston, we have a problem!</h2>
                                <p className="pnf-content-description">Error 404, the page you are looking for doesn't exist.</p>
                                <div className="pnf-content-action">
                                    <Link to={routes.index} className="link-btn">Take me home</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="pnf-preview">
                                <img src={houston} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default PageNotFound;