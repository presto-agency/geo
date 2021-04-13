import React from 'react';
import Slider from 'react-slick';

const HeroCarousel = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        lazyLoad: true
    };

    return (
        <Slider className="hero-carousel" {...settings}>
            <div className="hero-carousel-slide scale">
                <img src="http://164.90.162.188/api/uploads/Sport_Academy_f95c36b200.jpg" alt=""/>
            </div>
            <div className="hero-carousel-slide">
                <img src="http://164.90.162.188/api/uploads/zabeel_DCP_ae0d7172ad.jpg" alt=""/>
            </div>
        </Slider>
    )
};

export default HeroCarousel;