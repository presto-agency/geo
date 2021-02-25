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
        autoplaySpeed: 4000,
    };

    return (
        <Slider className="hero-carousel" {...settings}>
            <div className="hero-carousel-slide scale">
                <img src="https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt=""/>
            </div>
            <div className="hero-carousel-slide scale">
                <img src="https://images.unsplash.com/photo-1441040744088-a70b8213d4d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt=""/>
            </div>
            <div className="hero-carousel-slide scale">
                <img src="https://images.unsplash.com/photo-1453284441168-8780c9f52097?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt=""/>
            </div>
        </Slider>
    )
};

export default HeroCarousel;