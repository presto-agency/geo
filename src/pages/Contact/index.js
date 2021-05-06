import React from 'react';
import MetaTags from "react-meta-tags";
import WithBaseUrl from "components/Hoc/withBaseUrl";

import SplitTitle from "components/SplitTitle";
import Feedback from "./Feedback";
import Offices from "./Offices";

const ContactPage = ({ baseUrl }) => {
    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office | Contact Us</title>
                <meta name="description" content="For any enquiries, or just to say hello." />
                <meta property="og:title" content="Global Engineering Office | Contact Us" />
                <meta property="og:image" content={`${baseUrl}/uploads/Double_Tree_by_HILTON_Front_View_md_8aad79d9cb.jpg`} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content="For any enquiries, or just to say hello." />
            </MetaTags>
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="hero-content">
                                <p className="label label-uppercase fade">contact us</p>
                                <h1 className="h-2 hero-content-title split-text">
                                    <SplitTitle>For any enquiries, or just to say hello.</SplitTitle>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Feedback />
            <Offices baseUrl={baseUrl} />
        </div>
    )
};

export default WithBaseUrl()(ContactPage);