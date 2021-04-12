import React from 'react';
import PropTypes from 'prop-types';

const _baseURL = process.env.REACT_APP_API_URL;

const TestimonialSingle = ({ testimonial: { message, authorFullName, authorPosition, authorAvatar, companyLogo } }) => {
    return (
        <div className="testimonial">
            <div className="testimonial-author">
                <div className="testimonial-author-photo">
                    <img src={_baseURL + authorAvatar.formats.thumbnail.url} alt={authorFullName} />
                </div>
            </div>
            <div className="testimonial-body">
                <p className="h-4">{message}</p>
                <p className="testimonial-author-title h-6">{authorFullName}</p>
                <p className="testimonial-author-position">{authorPosition}</p>
                <div className="testimonial-author-logo">
                    <img src={_baseURL + companyLogo.url} />
                </div>
            </div>
        </div>
    )
};

export default TestimonialSingle;

TestimonialSingle.propTypes = {
    testimonial: PropTypes.object.isRequired
};