import React from 'react';
import Feedback from "./Feedback";
import Offices from "./Offices";

const ContactPage = () => {
    return (
        <div className="page">
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="hero-content">
                                <p className="label label-uppercase fade">contact us</p>
                                <h1 className="h-2 hero-content-title split-title">For any enquiries, or just to say hello.</h1>
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