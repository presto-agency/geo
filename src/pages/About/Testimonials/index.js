import React, { useState } from 'react';
import CarouselNav from "components/CarouselNav";
import TestimonialSingle from "./Testimonial";
import Slider from 'react-slick';
import list from './list';

const Testimonials = () => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(list.length);
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
                        <p className="label">Testimonials</p>
                        <CarouselNav
                            onNext={next}
                            onPrev={prev}
                            currentSlide={currentSlide}
                            totalSlides={totalSlides}
                        />
                        <Slider ref={carousel} className="testimonials-carousel" {...settings}>
                            {
                                list.map((testimonial, key) => (
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