import React from 'react';
import PropTypes from 'prop-types';
import WithBaseUrl from "components/Hoc/withBaseUrl";

const TestimonialSingle = ({ testimonial: { message, authorFullName, authorPosition, authorAvatar, companyLogo }, baseUrl }) => {

    console.log(authorAvatar)

    return (
        <div className="testimonial">
            <div className="testimonial-author">
                <div className="testimonial-author-photo">
                    <img src={!!authorAvatar ? baseUrl + authorAvatar.formats.thumbnail.url : 'https://via.placeholder.com/300/?text=GEO'} alt={authorFullName} />
                </div>
            </div>
            <div className="testimonial-body">
                <p className="h-4">{message}</p>
                <p className="testimonial-author-title h-6">{authorFullName}</p>
                <p className="testimonial-author-position">{authorPosition}</p>
                <div className="testimonial-author-logo">
                    <img src={!!companyLogo ? baseUrl + companyLogo.url : 'https://via.placeholder.com/300/?text=GEO'} />
                </div>
            </div>
        </div>
    )
};

export default WithBaseUrl()(TestimonialSingle);

TestimonialSingle.propTypes = {
    testimonial: PropTypes.object.isRequired
};