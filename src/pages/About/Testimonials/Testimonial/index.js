import React from 'react';

const TestimonialSingle = ({ testimonial: { author: { photo, name, position, logo }, comment } }) => {
    return (
        <div className="testimonial">
            <div className="testimonial-author">
                <div className="testimonial-author-photo">
                    <img src={photo} alt={name} />
                </div>
            </div>
            <div className="testimonial-body">
                <p className="h-4">{comment}</p>
                <p className="testimonial-author-title h-6">{name}</p>
                <p className="testimonial-author-position">{position}</p>
                <div className="testimonial-author-logo">
                    <img src={logo} />
                </div>
            </div>
        </div>
    )
};

export default TestimonialSingle;