import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CarouselNav from "components/CarouselNav";
import TestimonialSingle from "./Testimonial";
import Slider from 'react-slick';

const Testimonials = ({ data }) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(data.length);
    const carousel = React.createRef();

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        fade: true,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        beforeChange: (index, nextIndex) => {
            setCurrentSlide(nextIndex + 1);
        },
    };

    const next = () => {
        carousel.current.slickNext();
    };

    const prev = () => {
        carousel.current.slickPrev();
    };

    return (
        <section className="section testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Testimonials</p>
                        <CarouselNav
                            onNext={next}
                            onPrev={prev}
                            currentSlide={currentSlide}
                            totalSlides={totalSlides}
                        />
                        <Slider ref={carousel} className="testimonials-carousel" {...settings}>
                            {
                                data.map((testimonial, key) => (
                                    <div className="testimonials-carousel-slide" key={key}>
                                        <TestimonialSingle testimonial={testimonial} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Testimonials;

Testimonials.propTypes = {
    data: PropTypes.array
};