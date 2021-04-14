import React from 'react';
import Slider from 'react-slick';

const _baseURL = process.env.REACT_APP_API_URL;

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
                <img src={`${_baseURL}/uploads/Sport_Academy_f95c36b200.jpg`} alt=""/>
            </div>
            <div className="hero-carousel-slide">
                <img src={`${_baseURL}/uploads/zabeel_DCP_ae0d7172ad.jpg`} alt=""/>
            </div>
        </Slider>
    )
};

export default HeroCarousel;