import React from 'react';
import banner from 'assets/images/contact-us.jpg';
import FeedbackForm from "./Form";

const Feedback = () => {
    return (
        <section className="section feedback">
            <div className="feedback-banner scale">
                <img src={banner} alt="For any enquiries, or just to say hello." />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 offset-xl-7">
                        <div className="feedback-form fade">
                            <FeedbackForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Feedback;