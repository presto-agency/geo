import React from 'react';
import MetaTags from "react-meta-tags";

import SplitTitle from "components/SplitTitle";
import Feedback from "./Feedback";
import Offices from "./Offices";
import banner from 'assets/images/contact-us.jpg';

const ContactPage = () => {
    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office | Contact Us</title>
                <meta name="description" content="For any enquiries, or just to say hello." />
                <meta property="og:title" content="Global Engineering Office | Contact Us" />
                <meta property="og:image" content={banner} />
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
            <Offices />
        </div>
    )
};

export default ContactPage;