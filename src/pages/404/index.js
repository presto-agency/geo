import React from 'react';
import MetaTags from "react-meta-tags";
import { Link } from 'react-router-dom';

import routes from 'routes';
import SplitTitle from "components/SplitTitle";
import houston from 'assets/images/houston.jpg';

const PageNotFound = () => {
    return (
        <div className="page page-not-found">
            <MetaTags>
                <title>Global Engineering Office | Page not found</title>
                <meta name="description" content="Houston, we have a problem!" />
                <meta property="og:title" content="Global Engineering Office | Page not found" />
                <meta property="og:image" content={houston} />
            </MetaTags>
            <section className="section pnf">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="pnf-content">
                                <h2 className="pnf-content-title h-2 split-text">
                                    <SplitTitle>Houston, we have a problem!</SplitTitle>
                                </h2>
                                <p className="pnf-content-description fade">Error 404, the page you are looking for doesn't exist.</p>
                                <div className="pnf-content-action fade">
                                    <Link to={routes.index} className="link-btn">Take me home</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="pnf-preview scale">
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